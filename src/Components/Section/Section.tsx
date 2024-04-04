import React, { ReactNode } from "react"
import Link from "../Link/Link.tsx"
import "./Section.css"

type SectionProps = {
    children: ReactNode,
    customClass: string,
}

function Section(props: SectionProps) {
    return (
        <section className={props.customClass}>
           {props.children}
        </section>
    )
}

export default Section