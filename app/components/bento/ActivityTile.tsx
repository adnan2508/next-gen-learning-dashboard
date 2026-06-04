export default function ActivityTile() {
  const activityData = [
    20, 40, 15, 70, 50, 80, 35,
  ];

  return (
    <article
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        min-h-[260px]
      "
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">
          Learning Activity
        </h2>

        <span className="text-zinc-500 text-sm">
          Last 7 days
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-2 h-36">
        {activityData.map((height, index) => (
          <div
            key={index}
            className="
              flex-1
              rounded-full
              bg-gradient-to-t
              from-indigo-500
              to-cyan-400
            "
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    </article>
  );
}