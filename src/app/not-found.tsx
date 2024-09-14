import { GoBack } from "@/components/go-back";
import { LottieFile } from "@/components/lottie-file";

export default function Custom404() {
    return (
        <div className="w-full min-h-[calc(100vh-20rem)] flex flex-col items-center gap-4 pt-16 max-lg:px-0">
            <div className="w-[50vw] max-lg:w-full bg-white rounded-xl p-16 max-lg:p-5 flex flex-col items-center justify-center mt-20">
                <LottieFile source="/404.json" />
                <GoBack />
            </div>
        </div>
    );
}
