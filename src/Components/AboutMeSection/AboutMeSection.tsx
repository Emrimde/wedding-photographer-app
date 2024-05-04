import React from "react";
import { aboutMe1, aboutMe2 } from "../../images";

function AboutMeSection() {
    return (<>
        <section className="container">
            <section className="row mt-5">
                <div className=" col-xl-7 col-md-6 col-xs-12 mt-5">
                    <img src={aboutMe1} alt="" />
                </div>
                <div className=" col-xl-5 col-md-6 col-xs-12 mt-5">
                    <h3 className="text-center mb-3"><b>Meet the photographer for your wedding. </b></h3>
                    <p className=" fs-5">
                        We return to wedding and reception photos most often in our lives. They are usually one of the most precious family heirlooms. The best ones, even as the years go by, constantly delight and evoke not only the events but also the true emotions. If you want the same for yourself, a good wedding photographer is a must. Perhaps together we can stop the story of your love in time.</p>

                    <p className="fs-5">Who am I? I was supposed to be a radio presenter, a psychologist and even a journalist. Eventually I became a wedding photographer.<b> I love to look, I love to listen, I love to feel</b>. I photograph because it allows me to feel all these emotions at the same time. I have turned my greatest passion into a way of life and this is what gives me happiness. Photography also constantly teaches me to be sensitive and shows me things I didn't know existed before or simply didn't see around me.</p>

                </div>
            </section>
            <main className="row mt-3">
                <div className="col-xl-7 col-md-6 col-xs-12 mt-5">
                    <img src={aboutMe2} alt="Photographer" />
                </div>
                <div className=" col-xl-5 col-md-6 col-xs-12 mt-5">
                    <p className="fs-5">I photographed for <b>over 10 years</b> before I finally chose wedding photography - it is what gives me the most satisfaction. When photographing, I always make a reportage with regard to the aesthetic and artistic side of photography. When working, I try not to influence the course of events unless there is a clear need to do so. I believe that a photographer at a wedding is not a director but a participant in the events, so I always try to be close to you, especially where the emotions are. <b>Being with you during one of the most important days of your life, is something truly amazing and something unique every time.</b> When photographing weddings, I can call myself a "subtle voyeur of emotions". - so I become part of them and can create images for you that are filled with true love.</p>

                    <p className="fs-5">Over the years, I have managed to develop an individual style that I am very proud of. That is why I encourage you to take a look at my portfolio. This is where I present wedding reportages and the results of outdoor sessions. If such photographs appeal to you, I am sure we will find a common language in other matters.</p>

                    <p className="fs-5">I photograph weddings <b>all over Poland and abroad</b>. I always strive to make my frames show the most important events, quickly passing emotions and all those moments that gathered in one album create the atmosphere and climate of the whole day. I attach great importance to creating unique wedding photos for you, which will be a faithful, yet strongly artistic record of your wedding and reception.</p>

                </div>
            </main>


        </section>

        <aside className="container mt-5">

            <h1 className="text-center mb-2">Looking for wedding phorographer?</h1>
            <div className="row">

                <p className="p-2 text-center"> Let's create something extraordinary together! <b>Fill in the form</b> below so I can prepare a quote perfectly tailored to your <b>needs</b> .</p>

            </div >
            <div className="row">
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
        </aside>


    </>)
}

export default AboutMeSection