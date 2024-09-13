import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col min-h-screen bg-gradient-to-t from-primary via-[#3EA111] to-secondary">
            <div className="w-full flex flex-col min-h-screen bg-[url('/woman5.png')] bg-cover bg-left">
                <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app px-8">
                    {children}
                    <div className="w-full flex items-center justify-center text-white py-6">
                        Desenvolvido por Firgun Tecnologia Social Ltda -{" "}
                        {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </div>
    );
}
