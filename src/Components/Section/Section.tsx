import React from "react"
import "./Section.css"

type SectionProps = {
    customClass: string,
}

function Section(props: SectionProps) {
    return (
        <section className={props.customClass}>
            <div className="landing-page-dark">
                <div className="container">
                    <header className="row ">
                        <h1 className=" mt-5 display-4 col-sm-12 text-center text-warning header-animation1" id="main-page">Welcome!</h1>
                        <h2 className="mt-5 col-sm-12 text-center text-warning header-animation2"><b>I am</b> wedding photographer <b>and...</b>
                        </h2>
                        <h2 className="mt-3 col-sm-12 text-center text-warning header-animation3">
                            <b>I</b> want <b>you</b> to remember this day for the rest of your life </h2>
                    </header>
                </div>
            </div>
        </section>
    )
}

export default Section