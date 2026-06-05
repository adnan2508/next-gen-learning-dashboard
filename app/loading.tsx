"use client";

import Skeleton from "./components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-6">
        <Skeleton />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </main>
  );
}