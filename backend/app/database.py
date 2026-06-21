import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker, DeclarativeBase

load_dotenv()

_url = os.environ["DATABASE_URL"]
# SQLAlchemy用にschemaパラメータを除いたURLを組み立てる
# (postgresql://... の形式に変換)
if "?schema=" in _url:
    _url = _url.split("?schema=")[0]
DATABASE_URL = _url.replace("postgresql://", "postgresql+psycopg2://")

engine = create_engine(DATABASE_URL, echo=False)

# 接続時にsearch_pathをtrader_schemaに設定する
@event.listens_for(engine, "connect")
def set_search_path(dbapi_conn, connection_record):
    cursor = dbapi_conn.cursor()
    cursor.execute("SET search_path TO trader_schema")
    cursor.close()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
