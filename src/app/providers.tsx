"use client";

import { AnswersProvider } from "@/contexts/answers-context";
import { DaysProvider } from "@/contexts/days-context";
import { ModalProvider } from "@/contexts/modal-context";
import { PageProvider } from "@/contexts/page-context";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PageProvider>
            <AnswersProvider>
                <DaysProvider>
                    <ModalProvider>{children}</ModalProvider>
                </DaysProvider>
            </AnswersProvider>
        </PageProvider>
    );
}
