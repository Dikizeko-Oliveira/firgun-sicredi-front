import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sucesso",
};

export default async function Success() {
    return (
        <div className="w-full min-h-[calc(100vh-15rem)] flex flex-col items-center gap-4 pt-16 max-lg:px-0">
            <div className="w-[50vw] max-lg:w-full max-xl:w-[70vw] min-h-60 flex flex-col items-center bg-white rounded-2xl p-14 max-lg:p-5 mt-20">
                <h1 className="text-primary text-[2.3rem] max-lg:text-[1.5rem] max-lg:mt-[-5px] font-semibold italic mt-[-20px]">
                    Agradecemos a sua resposta!
                </h1>
                <p className="text-base font-medium text-center mt-4 text-third">
                    Gostaríamos de expressar nossa sincera gratidão por você ter
                    dedicado seu tempo para responder ao nosso formulário. Suas
                    respostas são extremamente valiosas e irão nos ajudar a
                    melhorar e entender melhor o seu perfil financeiro.
                </p>

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
