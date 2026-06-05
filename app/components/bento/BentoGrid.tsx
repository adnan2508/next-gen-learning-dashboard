import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseTile from "./CourseTile";

import { getCourses } from "@/app/lib/supabase/getCourses";

export default async function BentoGrid() {
  const courses = await getCourses();

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
        {courses.map((course) => (
          <CourseTile
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}