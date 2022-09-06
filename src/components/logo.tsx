import React, { ReactNode } from "react";

type LogoProps = {
    children: ReactNode
}

export default function Logo(props: LogoProps) {
    return (
    <div className="logo">
        <span>CASIO</span>
        {props.children}
    </div>
    );
}