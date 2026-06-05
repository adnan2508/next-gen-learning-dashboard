import BentoGrid from "./components/bento/BentoGrid";
import Sidebar from "./components/layout/Sidebar";
import { getCourses } from "./lib/supabase/getCourses";


export default async function Home() {
  const courses = await getCourses();

  console.log(courses);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Sidebar />

      <main className="flex-1 p-6 mb-12 lg:mb-0">
        <BentoGrid />
      </main>
    </div>
  );
}
