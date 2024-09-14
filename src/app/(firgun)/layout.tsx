import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
    return <div className="w-full">{children}</div>;
}
