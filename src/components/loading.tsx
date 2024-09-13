import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div className="w-[50vw] max-lg:w-full flex flex-col bg-white rounded-xl p-14 max-lg:p-5 mt-16">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-2 mt-3" />
            <Skeleton className="w-full h-2 mt-2" />
            <Skeleton className="w-full h-2 mt-2" />

            <Skeleton className="w-full h-14 mt-10" />
            <Skeleton className="w-full h-14 mt-6" />
            <Skeleton className="w-full h-14 mt-6" />

            <div className="w-full flex flex-wrap items-center gap-x-10 gap-y-5 mt-10">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="flex items-center gap-5">
                        <Skeleton className="w-6 h-6" />
                        <Skeleton className="w-48 h-3" />
                    </div>
                ))}
            </div>
        </div>
    );
}
