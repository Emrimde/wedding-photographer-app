import React from "react";
import Link from "../Link/Link.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(<> <footer className="border-top border-dark mt-5">
    <div className="container-sm">
        <footer className="  row  d-flex justify-content-center mt-5">
            <aside className="col-sm-6 col-lg-6">
                <header className="h1 text-center mt-3 ">Contact</header>
                <p className="text-center">Phone number 000-000-000</p>
                <p className="text-center">photographersname@gmail.com</p>
            </aside>
            <aside className="col-sm-6 col-lg-6">
                <header className="h1 text-center mt-3 ">Follow me on</header>
                <div className="row">
            <p className=" text-center col-sm-12">
                <Link href="https://www.facebook.com" customClass="btn btn-lg  text-decoration-none" target="_blank"><FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon></Link>
                <Link href="https://www.instagram.com" customClass=" btn  btn-lg  mx-3 text-decoration-none" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://twitter.com" customClass=" btn btn-lg text-decoration-none" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                </Link>
            </p>
        </div>
            </aside>
        </footer>
        <div className="row">
            <p className=" text-center col-sm-12 mt-5">
                <Link href="https://www.facebook.com" customClass="btn btn-sm text-decoration-none" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>
                <Link href="https://www.instagram.com" customClass=" btn  btn-sm text-decoration-none" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://twitter.com" customClass=" btn btn-sm text-decoration-none" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <p className="text-center mt-1 mb-0  col-sm-12"><i>All rights reserved &copy; 2024 - My Company</i></p>
            </p>
        </div>
    </div>
</footer></>)
}

export default Footer