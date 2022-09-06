import React, { ReactNode } from "react";

type SolarProps = {
    children: ReactNode
}

export default function Solar(props: SolarProps) {
    return (
    <div className="solars">
        <div className="solar"></div>
        <div className="solar"></div>
        <div className="solar"></div>
        <div className="solar"></div>
    </div>
    );
}