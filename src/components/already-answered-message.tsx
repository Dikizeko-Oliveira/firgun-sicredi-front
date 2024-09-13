"use client";

import { useDays } from "@/contexts/days-context";

export function AlreadyAnsweredMessage() {
    const { days } = useDays();

    return (
        <p className="text-base font-medium text-center mt-4 text-third">
            Agradecemos por sua participação e por já ter preenchido nosso
            formulário! Queremos informar que, para garantir a qualidade das
            respostas e dar oportunidade a todos, você poderá respondê-lo
            novamente em até {days ? `${days} dias.` : "90 dias."}
        </p>
    );
}
