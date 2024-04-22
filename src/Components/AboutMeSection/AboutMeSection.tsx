import React from "react";

function AboutMeSection() {
    return (<>
        <section className="container">
            <main className="row mt-5">
                <div className=" col-xl-7 col-md-6 col-xs-12 mt-5">
                    <img src={require('../../images/AboutMe1.jpg')} alt="" />
                </div>
                <div className=" col-xl-5 col-md-6 col-xs-12 mt-5">
                    <h3 className="text-center mb-3"><b>Meet the photographer for your wedding. </b></h3>
                    <p className=" fs-5">
                        We return to wedding and reception photos most often in our lives. They are usually one of the most precious family heirlooms. The best ones, even as the years go by, constantly delight and evoke not only the events but also the true emotions. If you want the same for yourself, a good wedding photographer is a must. Perhaps together we can stop the story of your love in time.</p>

                        <p className="fs-5">Who am I? I was supposed to be a radio presenter, a psychologist and even a journalist. Eventually I became a wedding photographer.<b> I love to look, I love to listen, I love to feel</b>. I photograph because it allows me to feel all these emotions at the same time. I have turned my greatest passion into a way of life and this is what gives me happiness. Photography also constantly teaches me to be sensitive and shows me things I didn't know existed before or simply didn't see around me.</p>
                    
                </div>
            </main>
            <main className="row mt-5">
                <div className="col-xl-7 col-md-6 col-xs-12 mt-5">
                    <img src={require('../../images/AboutMe2.jpg')} alt="" />
                </div>
                <div className=" col-xl-5 col-md-6 col-xs-12 mt-5">
                    <p className=" fs-5">I photographed for <b>over 10 years</b> before I finally chose wedding photography - it is what gives me the most satisfaction. When photographing, I always make a reportage with regard to the aesthetic and artistic side of photography. When working, I try not to influence the course of events unless there is a clear need to do so. I believe that a photographer at a wedding is not a director but a participant in the events, so I always try to be close to you, especially where the emotions are. <b>Being with you during one of the most important days of your life, is something truly amazing and something unique every time.</b> When photographing weddings, I can call myself a "subtle voyeur of emotions". - so I become part of them and can create images for you that are filled with true love.</p>

                        <p className="fs-5">Over the years, I have managed to develop an individual style that I am very proud of. That is why I encourage you to take a look at my portfolio. This is where I present wedding reportages and the results of outdoor sessions. If such photographs appeal to you, I am sure we will find a common language in other matters.</p>

                        <p className="fs-5">Fotografuję śluby<b> w całej Polsce oraz za granicą.</b>  Zawsze dążę do tego, aby moje kadry pokazywały najważniejsze wydarzenia, szybko przemijające emocje oraz wszystkie te momenty, które  zebrane w jednym albumie tworzą atmosferę i klimat całego dnia.  Przywiązuję ogromną wagę do tego, aby tworzyć dla Was niepowtarzalne zdjęcia ślubne, które będą wiernym, a jednocześnie mocno artystycznym zapisem Wasze ślubu i wesela.</p>
                    
                </div>
            </main>

        </section>

    </>)
}

export default AboutMeSection