import { CheckSquare } from "lucide-react";

interface ProgressbarProps {
  progress: number;
}

export function Progressbar({ progress }: ProgressbarProps) {
  return (
    <div className="flex items-end flex-col w-full gap-2">
      <div className="flex items-center w-full h-4 bg-gray-200 rounded-2xl">
        <div
          className={`h-full ${progress === 100 ? "bg-green-500" : "bg-blue-400"} rounded-2xl`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`flex items-center justify-center rounded-lg p-1
        ${progress === 100 ? "bg-green-500" : "bg-blue-400"}`}
      >
        <span className="text-white font-semibold text-sm">{progress}%</span>
        <CheckSquare className="h-4 w-4 text-white ml-1" />
      </div>
    </div>
  );
}
