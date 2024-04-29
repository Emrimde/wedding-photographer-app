import React, { ReactNode } from "react"
import "./Nav.css";
import Link from "../Link/Link.tsx";



function Navv() {
    return (
        <>
            <nav className="navigation-background">
                <div className="container py-3">

                    <div className="row">
                        <div className=" col-4 col-sm-4">
                            <h1 className="d-none d-sm-block"> <a href="/">Homepage</a></h1>
                        </div>

                        <div className=" col-12 col-sm-8">
                            <div className="h-100 d-flex justify-content-evenly align-items-center">

                                <Link href="/about-me" customClass="fs-4 d-none d-md-block">About me</Link>
                                <Link href="/offer" customClass="fs-4 d-none d-md-block">Offer</Link>
                                <Link href="/contact" customClass="fs-4 d-none d-md-block">Contact</Link>
                                <Link href="/blog" customClass="fs-4 d-none d-md-block">Blog</Link>
                                <div className="dropdown d-block d-md-none">
                                    <button className="btn dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item d-block d-sm-none" href="#">Homepage</a></li>
                                        <li><a className="dropdown-item" href="#">About me</a></li>
                                        <li><a className="dropdown-item" href="#">Offer</a></li>
                                        <li><a className="dropdown-item" href="#">Contact</a></li>
                                        <li><a className="dropdown-item" href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Portfolio
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Wedding outdoor</a></li>
                                        <li><a className="dropdown-item" href="#">Wedding Reportage</a></li>
                                        <li><a className="dropdown-item" href="#">Engagement session</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>





                </div>
            </nav>
        </>
    )
}

export default Navv