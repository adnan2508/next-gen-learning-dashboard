"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-3 text-zinc-400">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-5 px-4 py-2 rounded-xl bg-indigo-500"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}