import React, { ReactNode } from "react";
import "./Div.css";

type DivProps = {
    children: ReactNode,
    customClass: string,
}

function Div(props: DivProps) {
    return (
        <>
            <div className={props.customClass}>
                {props.children}
            </div>
        </>)
}

export default Div
