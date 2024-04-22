import React, { useEffect, useState } from "react";
import "./Nav.css";

import Link from "../Link/Link.tsx";




function Nav() {
    return (
        <>
            <nav className="navigation-background ">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-sm-4 group-of-links">
                            <h1 className="important-header"><Link href="/" customClass="">
                                HOMEPAGE
                            </Link>
                            </h1>
                        </div>
                        <div className="col-sm-8 group-of-links">
                            <Link href="#" customClass="col-sm-2 fs-5">About me</Link>
                            <Link href = "/offer" customClass="col-sm-2 fs-5">Offer</Link>
                            <Link href="#" customClass="col-sm-2 fs-5">Contact</Link>
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
                            {/* <h2 className="col-sm-2"><Link href="#" customClass="">PORTFOLIO</Link></h2> */}

                            <Link href="#" customClass="col-sm-2 fs-5">Blog</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav