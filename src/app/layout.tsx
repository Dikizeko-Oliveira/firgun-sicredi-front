import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
        <html lang="pt" className={exo.className}>
            <body className="text-zinc-900 antialiased bg-app">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
