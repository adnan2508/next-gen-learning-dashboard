import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseTile from "./CourseTile";

import { getCourses } from "@/app/lib/supabase/getCourses";
import StaggerContainer from "../ui/StaggerContainer";
import AnimatedItem from "../ui/AnimatedItem";

export default async function BentoGrid() {
  const courses = await getCourses();

  return (
    <StaggerContainer>
    <section
      aria-label="Dashboard content"
      className="grid gap-6"
    >
      {/* Top Row */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AnimatedItem>
          <HeroTile />
          </AnimatedItem>
        </div>

        <AnimatedItem>
        <ActivityTile />
        </AnimatedItem>
      </div>

      {/* Dynamic Course Cards will go here */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <AnimatedItem>
          <CourseTile
            key={course.id}
            course={course}
          />
          </AnimatedItem>
        ))}
      </div>
    </section>
    </StaggerContainer>
  );
}