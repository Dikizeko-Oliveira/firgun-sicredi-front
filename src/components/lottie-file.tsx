"use client";

import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export function LottieFile({ source }: { source: string }) {
    const lottieRef = useRef(null);

    return (
        <Player
            ref={lottieRef}
            autoplay={true}
            loop={true}
            controls={true}
            src={source}
        ></Player>
    );
}
