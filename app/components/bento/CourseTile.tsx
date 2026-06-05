import { Course } from "@/app/types/course";
import {
    Code2,
    FileCode,
    Rocket,
    Network,
    LucideIcon,
} from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import ProgressBar from "../ui/ProgressBar";

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
        <AnimatedCard>
        <article
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 min-h-55"
        >
            <div
                className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-cyan-500/5 pointer-events-none"
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

                <ProgressBar progress={course.progress} />

                <p className="mt-2 text-sm text-zinc-400">
                    {course.progress}%
                </p>
            </div>
        </article>
        </AnimatedCard>
    );
}