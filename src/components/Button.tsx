import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode,
    customClass: string
}

function Button(props : ButtonProps) {
    return (<button type = "button" className = {`btn ${props.customClass}`}>{props.children}</button>);
}

export default Button;