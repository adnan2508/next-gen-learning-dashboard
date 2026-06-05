import { Course } from "@/app/types/course";
import {
  Code2,
  FileCode,
  Rocket,
  Network,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Rocket,
  Network,
};

interface CourseTileProps {
  course: Course;
}

export default function CourseTile({
  course,
}: CourseTileProps) {
  const Icon = iconMap[course.icon_name] || Code2;

  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        min-h-55
      "
    >
      <div
        className="
          absolute inset-0
          bg-linear-to-br
          from-indigo-500/5
          via-transparent
          to-cyan-500/5
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <Icon
          size={28}
          className="text-indigo-400"
        />

        <h3 className="mt-4 font-semibold text-lg">
          {course.title}
        </h3>

        <p className="mt-8 text-sm text-zinc-400">
          Progress
        </p>

        <div className="mt-2 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          {course.progress}%
        </p>
      </div>
    </article>
  );
}