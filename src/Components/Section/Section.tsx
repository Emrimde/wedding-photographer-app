import React, { ReactNode } from "react"

import "./Section.css"

type SectionProps = {
    children: ReactNode,
    customClass: string,
}

function Section(props: SectionProps) {
    return (
        <section className={props.customClass}>
           <header className="header-div">
                <h2 className="header-name text-center">Welcome!</h2>
           </header>
        </section>
    )
}

export default Section