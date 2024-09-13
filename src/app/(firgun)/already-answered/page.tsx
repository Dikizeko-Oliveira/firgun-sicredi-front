import { AlreadyAnsweredMessage } from "@/components/already-answered-message";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Formulário já respondido",
};

export default async function AlreadyAnswered() {
    return (
        <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col items-center gap-4 pt-14 max-lg:px-0">
            <Image
                src="/logo.svg"
                className="w-48 h-fit"
                width={550}
                height={550}
                alt="logo"
                priority
            />

            <div className="w-[50vw] max-lg:w-full min-h-60 flex flex-col items-center bg-white rounded-2xl p-14 max-lg:p-5 mt-16">
                <h1 className="text-primary text-[2.3rem] max-lg:text-[1.5rem] max-lg:mt-[-5px] font-semibold italic mt-[-20px]">
                    Você já respondeu esse formulário!
                </h1>
                <AlreadyAnsweredMessage />

                <Image
                    src="/like.svg"
                    className="w-24 h-fit mt-8"
                    width={150}
                    height={150}
                    alt="logo"
                    priority
                />
            </div>
        </div>
    );
}
