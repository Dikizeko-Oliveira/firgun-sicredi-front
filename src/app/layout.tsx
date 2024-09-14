import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";

const exo = Exo_2({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
    title: {
        template: "%s | Firgun",
        default: "firgun",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className={exo.className} suppressHydrationWarning>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />

            <body className="text-zinc-900 antialiased bg-primary">
                <div className="relative w-full min-h-[calc(100vh-5.5rem)] bg-[url('/background.png')] bg-cover bg-no-repeat bg-center" />

                <div className="mx-auto w-full max-w-[1600px] flex flex-col items-center justify-center px-8 mt-8 absolute top-0 right-0 left-0">
                    <Image
                        src="/logo.svg"
                        className="w-48 h-fit mt-10"
                        width={550}
                        height={550}
                        alt="logo"
                        priority
                    />
                    <Providers>{children}</Providers>
                    <div className="w-full flex items-center justify-center text-white py-6 max-sm:text-sm">
                        Desenvolvido por Firgun Tecnologia Social Ltda -{" "}
                        {new Date().getFullYear()}
                    </div>
                </div>
            </body>
        </html>
    );
}
