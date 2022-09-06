import React, { ReactNode } from "react";

type BodyProps = {
    children: ReactNode
}

export default function Body(props: BodyProps) {
    return <div className="body">{props.children}</div>;
}