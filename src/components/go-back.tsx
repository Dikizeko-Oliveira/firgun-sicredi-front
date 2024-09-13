"use client";

import { useRouter } from "next/navigation";

export function GoBack() {
    const router = useRouter();

    return (
        <p className="mt-2">
            Página não encontrada,{" "}
            <span className="text-primary mx-1">solicite um novo link</span>{" "}
            para continuar
        </p>
    );
}
