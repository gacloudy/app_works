export function meta() {
  return [{ title: "パターン分析 | 株価分析" }];
}

const patternTypes = [
  { name: "ゴールデンクロス", description: "短期移動平均が長期移動平均を上回るパターン" },
  { name: "デッドクロス", description: "短期移動平均が長期移動平均を下回るパターン" },
  { name: "ダブルボトム", description: "株価が2回底をつけた後に上昇するパターン" },
];

export default function Patterns() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        パターン分析
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {patternTypes.map((p) => (
          <div
            key={p.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5"
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{p.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          検出結果
        </h3>
        <div className="text-gray-400 dark:text-gray-500 text-sm py-8 text-center">
          データがありません
        </div>
      </div>
    </div>
  );
}
