import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1B444B]/20 backdrop-blur-xl z-9999">
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#1B444B]/40 backdrop-blur-2xl border border-white/20">
        <span className="text-white text-lg font-medium">Loading</span>
        <Loader className="animate-spin size-6 text-white" />
      </div>
    </div>
  );
}