import React from "react"
import "./EngagementSession.css"
import { weddingEngagementSession1, weddingEngagementSession3, weddingEngagementSession4, weddingEngagementSession5, weddingEngagementSession6, weddingEngagementSession7, weddingEngagementSession8, weddingEngagementSession9 } from "../../images";

function EngagementSession() {
    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                    <img src={weddingEngagementSession1} className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession6} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession7} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession8} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={weddingEngagementSession9} className="d-block w-100" alt="..." />
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
                    <h1 className="display-2 mt-5 mb-5 col-sm-12 text-center">Engagement Session</h1>
                    <p className="col-sm-12">The engagement session is an interesting yet contentious topic. On the one hand, many brides and grooms-to-be wonder why they need such a session at all, while worrying about the extra costs. On the other hand, more and more people see its benefits. For a good few years now, the engagement session has been gaining in importance, which is why many of you are choosing to have one. I must admit that this is a great move. As well as being an interesting and unique souvenir, the photos from the engagement session will serve you in other ways. What are they? You can find out in my article. 
                    </p>
                    <p className="col-sm-12 mt-4">
                    The engagement session is for everyone - for every couple in love. Even if you are not planning a wedding in the near future. The photos from the engagement session are a remarkable keepsake that will stay with you for years to come. Engagement is a beautiful period in the life of every couple in love. After all, the engagement is the highlight of your relationship. Memories can be fleeting, and they are our greatest treasure. So it's worth preserving them for longer by opting for an engagement session.
                    </p>
                    <p className="col-sm-12 mt-4">However, I know from experience that the vast majority of couples who decide to do an engagement session have a wedding planned in the near future. They decide to do it for a number of reasons, usually choosing a photographer to work with during their wedding.</p>
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

export default EngagementSession