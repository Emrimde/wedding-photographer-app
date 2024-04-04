import React, { ReactNode } from "react"
import Link from "../Link/Link.tsx"
import "./Header.css"

type HeaderProps = {
    children: ReactNode,
    customClass: string,
}

function Header(props: HeaderProps) {
    return (
        <h1 className={props.customClass}>
           {props.children}
        </h1>
    )
}

export default Header