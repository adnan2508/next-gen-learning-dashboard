import { createSupabaseServerClient } from "./server";
import { Course } from "@/app/types/course";

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}