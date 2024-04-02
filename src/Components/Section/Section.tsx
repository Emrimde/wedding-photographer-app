import React from "react"
import "./Section.css"

type SectionProps = {
    customClass: string,
}

function Section(props : SectionProps){
    return(
        <section className={props.customClass}></section>
    )
}

export default Section