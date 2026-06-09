import { Construction } from "lucide-react";

export function UnderConstruction() {
  return (
    <div className="flex mt-10 items-center justify-center px-6">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-10 text-center backdrop-blur-sm">
        {/* Background Glow */}
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
            <Construction className="h-8 w-8 text-amber-400" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-zinc-100">
            Page Under Construction
          </h1>

          <p className="mx-auto max-w-md text-sm leading-6 text-zinc-400">
            We're currently building this page and adding new features.
            Please check back soon.
          </p>

          <div className="mt-8">
            <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-300">
              🚧 Work in Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}