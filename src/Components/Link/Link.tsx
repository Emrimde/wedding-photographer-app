import React, { ReactNode } from "react";
import "./Link.css";

type LinkProps = {
    children: ReactNode,
    href: string,
    customClass: string
    target:string
}

function Link(props : LinkProps){
    return(<a href = {props.href} className = {props.customClass} target={props.target}>{props.children}</a>);
}

export default Link