import React from "react"
import "./WeddingOutdoor.css"
import { weddingOutdoor1, weddingOutdoor10, weddingOutdoor2, weddingOutdoor3, weddingOutdoor4, weddingOutdoor5, weddingOutdoor7, weddingOutdoor8, weddingOutdoor9 } from "../../images"

function WeddingOutdoor() {
    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={weddingOutdoor1} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item active">
                                    <img src={weddingOutdoor2} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor3} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor4} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor5} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor7} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor8} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor9} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingOutdoor10} className="d-block w-100" alt="wedding outdoor couple" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>

                    <h1 className="display-2 mt-5 mb-5 col-sm-12 text-center">Wedding outdoor</h1>

                    <p className="col-sm-12">The wedding planner, the vast majority of couples cannot imagine their wedding reportage without it. And I have to admit that they are right. Even the shortest and most truncated version of an outdoor session is a wonderful supplement to the whole reportage from your wedding. I don't think it is necessary to explain to anyone what an outdoor wedding session is. However, it is worth informing the future bride and groom about certain issues and differences between photography taken during the ceremony and wedding party and plein air wedding photography.
                    </p>

                    <p className="col-sm-12 mt-4">
                        Despite the fact that the wedding open-air is a complement to the wedding reportage and is an integral part of it, it stands out in a decidedly different way. Why? On the occasion of the wedding reportage, I explained to you about my discretion and not putting pressure on you. A wedding reportage is probably a challenge for newlyweds, especially for those who do not quite like the presence of the lens. You will be forced to face the camera while remaining completely natural - because natural feelings always play a leading role. I won't be directing anything either. That's not my style. The outdoor session will write its own script.
                    </p>
                    <h1 className="mt-5 col-sm-12 display-4 text-italic text-center">
                        Fill in form
                    </h1>
                    <p className="col-sm-12 text-center mt-1 mb-4">And I will send you price list</p>
                    <form className="border border-dark p-5  ">
                        <div className=" row ">
                            <div className="mb-3 col-xl-4 col-md-12">
                                <label className="form-label">Your names</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 col-xl-2 col-md-12">
                                <label className="form-label">Date of the wedding</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 col-xl-4 col-md-12">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 col-xl-2 col-md-12">
                                <label className="form-label">Phone number</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3 col-md-12">
                                <label className="form-label">How do you know about me?</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-12">
                                <label className="form-label">Write a few words about your wedding</label>
                                <textarea className="form-control" id="comment" name="text"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default WeddingOutdoor