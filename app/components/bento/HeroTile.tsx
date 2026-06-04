export default function HeroTile() {
  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-zinc-800
        bg-zinc-900
        p-8
        min-h-64
      "
    >
      {/* Gradient Glow */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-br
          from-indigo-500/10
          via-purple-500/5
          to-cyan-500/10
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <p className="text-zinc-400 text-sm">
          Welcome back
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Adnan 👋
        </h1>

        <p className="mt-4 text-zinc-400 max-w-md">
          Continue your learning journey and keep your
          streak alive.
        </p>

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-orange-500/20
            bg-orange-500/10
            px-4
            py-2
          "
        >
          <span>🔥</span>

          <span className="text-sm font-medium">
            12 Day Streak
          </span>
        </div>
      </div>
    </article>
  );
}