import React, { ReactNode } from "react";

type DiplayProps = {
    children: ReactNode
}

export default function Display(props: DiplayProps) {
    return <div className="display">{props.children}</div>;
}