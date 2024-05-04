import React from "react";
import "./ContactSection.css";
import Link from "../Link/Link.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
    return (<>
        <main className="container">
            <h1 className="text-center display-3 my-5 ">Contact</h1>
            <div className="row">
                <div className="col-xl-6">
                    <form className="border border-dark p-5  ">
                        <div>
                            <div className="mb-3  col-md-12">
                                <label className="form-label">Your names</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3  col-md-12">
                                <label className="form-label">Date of the wedding</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3  col-md-12">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3  col-md-12">
                                <label className="form-label">Phone number</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>

                        <div >
                            <div className="mb-3 col-md-12">
                                <label className="form-label">How do you know about me?</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div >
                            <div className="mb-3 col-md-12">
                                <label className="form-label">Write a few words about your wedding</label>
                                <textarea className="form-control" id="comment" name="text"></textarea>

                            </div>
                        </div>


                        <div >
                            <div className="mb-3 col-md-12">
                                <button type="submit" className="btn btn-lg btn-dark">Send Message</button>

                            </div>
                        </div>




                    </form>
                </div>

                <div className="col-xl-6 ps-4 mt-5">
                    <div>
                        <p><b>Photographer's name</b></p>
                        <p><b>mobile phone:</b> 000 000 000</p>
                        <p><b>e-mail:</b> photographersname@gmail.com</p>
                    </div>


                    <p className="my-5 small fs-5">I photograph most often in cities such as:
                        Krakow, Katowice, Czestochowa, Warsaw,
                        but I am happy to take orders
                        all over the country.</p>





                    <p>  <Link href="https://twitter.com" customClass=" btn btn-lg text-decoration-none link-scale " target="_blank">
                        <span className="me-3" >Twitter</span>
                    <FontAwesomeIcon icon={faXTwitter} />
                </Link>  </p>

                <p>  <Link href="https://facebook.com" customClass=" btn btn-lg link-scale text-decoration-none" target="_blank">
                        <span className="me-3" >Facebook</span>
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>  </p>

                <p className="mb-4">  <Link href="https://instagram.com" customClass=" btn btn-lg text-decoration-none link-scale " target="_blank">
                        <span className="me-3" >Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>  </p>
                   
                    
                    <p>PHOTOGRAPHER'S COMPANY STUDIO
                        NIP: 0000000000
                        KRS: 0000000000</p>
                </div>

            </div>

        </main>







    </>)
}

export default ContactSection