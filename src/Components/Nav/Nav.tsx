import React from "react";
import "./Nav.css";
import Link from "../Link/Link.tsx";

function Nav() {
    return (
        <>
            <nav className="navigation-background ">
                <div className="container-lg">
                    <div className="row d-flex  align-items-center">
                        <div className="col-3 col-sm-4 d-flex py-2  d-flex justify-content-center">
                            <h1 className="h3"><Link href="/" customClass="">
                                Homepage
                            </Link>
                            </h1>
                        </div>
                        <div className="col-9 col-sm-8 d-flex justify-content-between align-items-center py-2">
                            <div>
<Link href="/about-me" customClass="fs-5 d-none d-sm-block">About me</Link>
                            <Link href = "/offer" customClass="fs-5 d-none d-sm-block">Offer</Link>
                            <Link href="/contact" customClass="fs-5 d-none d-sm-block">Contact</Link>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Wedding outdoor</a></li>
                                    <li><a className="dropdown-item" href="#">Wedding Reportage</a></li>
                                    <li><a className="dropdown-item" href="#">Engagement session</a></li>
                                </ul>
                            </div>
                            {/* <div className="dropdown d-md-none">
                                <button className="btn dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Wedding outdoor</a></li>
                                    <li><a className="dropdown-item" href="#">Wedding Reportage</a></li>
                                    <li><a className="dropdown-item" href="#">Engagement session</a></li>
                                </ul>
                            </div> */}
                            {/* <h2 className="col-sm-2"><Link href="#" customClass="">PORTFOLIO</Link></h2> */}

                            <Link href="#" customClass=" fs-5 d-none d-sm-block">Blog</Link>
                        </div>
                            </div>
                            
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav