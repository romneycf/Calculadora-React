import React, { ReactNode } from "react";
import CASIO from "../CASIO.png";
type MascoteProps = {
    children: ReactNode
}

export default function Mascote(props: MascoteProps) {
    return (
        <div>
            <img className="logo-img" src={ CASIO }/>
            {props.children}
        </div>
    );
}