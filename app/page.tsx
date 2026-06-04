import Sidebar from "./components/layout/Sidebar";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Sidebar />

      <main>
        <h1 className="my-5 ml-8 text-4xl font-bold">
          Welcome Back Adnan
        </h1>

        <p className="ml-8 text-zinc-400">
          Building the dashboard step by step.
        </p>
      </main>
    </div>
  );
}
