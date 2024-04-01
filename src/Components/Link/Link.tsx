import React, { ReactNode } from "react";

type LinkProps = {
    children: ReactNode,
    href: string,
    customClass: string
}

function Link(props : LinkProps){
    return(<a href = {props.href} className = {props.customClass}>{props.children}</a>);
}

export default Link