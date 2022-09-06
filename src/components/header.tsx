import React, { ReactNode } from "react";

type HeaderProps = {
    children: ReactNode
}

export default function Header(props: HeaderProps) {
    return (
    <div className="header">
        {props.children}
    </div>
    );
}