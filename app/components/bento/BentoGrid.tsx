import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";

export default function BentoGrid() {
  return (
    <section
      aria-label="Dashboard content"
      className="grid gap-6"
    >
      {/* Top Row */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <HeroTile />
        </div>

        <ActivityTile />
      </div>

      {/* Dynamic Course Cards will go here */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="h-52 rounded-3xl bg-zinc-900 border border-zinc-800">
          Course Card
        </article>

        <article className="h-52 rounded-3xl bg-zinc-900 border border-zinc-800">
          Course Card
        </article>

        <article className="h-52 rounded-3xl bg-zinc-900 border border-zinc-800">
          Course Card
        </article>
      </div>
    </section>
  );
}