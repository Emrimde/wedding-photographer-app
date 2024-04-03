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
                            <h1 className="important-header">Homepage</h1></div>
                        <div className="col-sm-8 group-of-links">
                            <h2 className="col-sm-2"><Link href="#" customClass="">About me</Link></h2>
                            <h2 className="col-sm-2"><Link href="#" customClass="">Offer</Link></h2>
                            <h2 className="col-sm-2"><Link href="#" customClass="">Contact</Link></h2>
                            <h2 className="col-sm-2"><Link href="#" customClass="">Gallery</Link></h2>
                            <h2 className="col-sm-2"><Link href="#" customClass="">Portfolio</Link></h2>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav