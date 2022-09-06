import React, { ReactNode } from "react";

type ButtonProps = {
    onClick: (e:any)=> void;
    className: string;
    value: number | string;
}

export default function Button(props: ButtonProps) {
    return(
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}