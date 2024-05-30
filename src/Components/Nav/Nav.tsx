import React from "react"
import "./Nav.css";
import Link from "../Link/Link.tsx";

function Nav() {
    return (
        <>
            <nav className="navigation-background">
                <div className="container py-3">
                    <div className="row">
                        <div className=" col-4 col-sm-4">
                            <h1 className="d-none d-sm-block"><Link customClass="" href="/" target="">Homepage</Link></h1>
                        </div>
                        <div className=" col-12 col-sm-8">
                            <div className="h-100 d-flex justify-content-evenly align-items-center">
                                <Link href="/about-me" customClass="fs-4 d-none d-lg-block link-scale" target="">About me</Link>
                                <Link href="/offer" customClass="fs-4 d-none d-lg-block link-scale" target="">Offer</Link>
                                <Link href="/contact" customClass="fs-4 d-none d-lg-block  link-scale" target="">Contact</Link>
                                <Link href="/blog" customClass="fs-4 d-none d-lg-block link-scale" target="">Blog</Link>
                                <div className="dropdown d-block d-lg-none">
                                    <button className="btn dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link customClass="dropdown-item d-block d-sm-none" href="/" target="">Homepage</Link></li>
                                        <li><Link customClass="dropdown-item" href="/about-me" target="">About me</Link></li>
                                        <li><Link customClass="dropdown-item" href="/offer" target="">Offer</Link></li>
                                        <li><Link customClass="dropdown-item" href="/contact" target="">Contact</Link></li>
                                        <li><Link customClass="dropdown-item" href="/blog" target="">Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Portfolio
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link customClass="dropdown-item" href="/wedding-outdoor" target="">Wedding outdoor</Link></li>
                                        <li><Link customClass="dropdown-item" href="/engagement-session" target="">Engagement session</Link></li>
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

export default Nav