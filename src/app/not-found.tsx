import { GoBack } from "@/components/go-back";
import { LottieFile } from "@/components/lottie-file";

export default function Custom404() {
    return (
        <div className="flex flex-col justify-between h-full w-full bg-gradient-to-t from-primary via-[#3EA111] to-secondary">
            <div className="w-full flex flex-col items-center justify-between min-h-screen bg-[url('/woman5.png')] bg-cover bg-left">
                <div className="w-[50vw] bg-white rounded-xl p-14 mt-44 max-lg:p-5 flex flex-col items-center justify-center">
                    <LottieFile source="/404.json" />
                    <GoBack />
                </div>
                <div className="w-full flex items-center justify-center text-white p-8 ">
                    Desenvolvido por Firgun Tecnologia Social Ltda -{" "}
                    {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
}
