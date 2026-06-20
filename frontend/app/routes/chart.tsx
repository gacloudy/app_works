export function meta() {
  return [{ title: "株価チャート | 株価分析" }];
}

export default function Chart() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        株価チャート
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-4">
        <div className="flex gap-3 items-center mb-4">
          <input
            type="text"
            placeholder="銘柄コード（例: 7203）"
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>1ヶ月</option>
            <option>3ヶ月</option>
            <option>6ヶ月</option>
            <option>1年</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            表示
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-center h-80 text-gray-400 dark:text-gray-500 text-sm">
          銘柄コードを入力してチャートを表示します
        </div>
      </div>
    </div>
  );
}
