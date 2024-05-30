import React from "react"
import "./HomePage.css"
import Link from "../Link/Link.tsx"
import { weddingPortfolio3, weddingPortfolio4 } from "../../images/index.js";
type SectionProps = {
    customClass: string,
}

function HomePage(props: SectionProps) {
    return (
        <>
            <section className={props.customClass}>
                <div className="landing-page-dark">
                    <div className="container">
                        <header className="row ">
                            <h1 className=" mt-5 display-4 col-sm-12 text-center text-warning header-animation1" id="main-page">Welcome!</h1>
                            <h2 className="mt-5 col-sm-12 text-center text-warning header-animation2"><b>I am</b> wedding photographer <b>and...</b>
                            </h2>
                            <h2 className="mt-3 col-sm-12 text-center text-warning header-animation3">
                                <b>I</b> want <b>you</b> to remember this day for the rest of your life </h2>
                        </header>
                    </div>
                </div>
            </section>






            <section className="container-sm">
                <main className="row main-text mt-5">
                    <header className="display-3 text-center mb-4 mt-3">Wedding photography</header>
                    <article>
                        <p><span className="text-800">Charming, wonderful, romantic</span> - That is exactly what my wedding photography is. Captivating moments, the extraordinary aura of the bride and groom, emotions and unique and atmospheric wedding venues - this is what I love about my work as a wedding photographer. </p>
                        <p className="mb-5">I am <span className="text-700"> Photographer's name</span> and my passion and work is <span className="text-700">wedding photography</span>. Let's get to know each other!</p>
                    </article>
                    <article>
                        <h3 className="text-center mb-4"><b>Wedding Photographer</b>  for people which see a difference</h3>
                        <p>I was captivated by wedding photography. With its beauty, with its extraordinary aura, with its unique surroundings. A wedding photographer allows you to freeze in images those extraordinary moments when your journey together begins. I became a wedding photographer out of a deliberate <span className="text-800">Initially</span>, I attempted many other avenues, but I only felt full satisfaction when I was able to document images from this extraordinary day in other people's lives. I take wedding photographs mainly in <span className="text-800">Silesia and Malopolska regions</span>, in cities such as <span className="text-700">Krakow, Katowice, Czestochowa</span>, but I will be happy to make a wedding reportage for you in any corner of Poland and the world. For beautiful wedding frames I am able to travel many kilometres.</p>
                    </article>
                    <article>
                        <h3 className="text-center my-5 display-5">Wedding Photography - FOR YOU!</h3>
                        <p>As a <span className="text-700">wedding photographer</span>, I don't just want your wedding photo shoot to be beautiful - it is extremely important to me that it is unique, unrepeatable and that you can look back on your wedding album years later with emotion and a smile.</p>

                        <p>I don't like artificial, set frames and I don't interfere with the wedding and reception - instead, I feel great excitement creating wedding photographs of the most important day of your life. The emotions I experience are very similar to the ones you experience on your wedding day - the excitement of anticipation, through the emotion of the ceremony and ending with the joyful revelry. This is the essence of wedding photography.</p>
                    </article>
                    <header className="mt-5 mb-5 text-center display-5">Watch my portfolio!</header>
                </main>
            </section>
            <div className="container-sm">
                <article className="row mb-5 text-center  ">
                    <div className="col-12 col-sm-6">
                        <Link href="/wedding-outdoor" customClass="position-relative d-block mt-4 photo-animation" target="">
                            <img src={weddingPortfolio3} className="img-fluid w-75" alt="Wedding Outdoor" />
                            <span className="h2 text-white position-absolute bottom-0 start-50 translate-middle-x">Wedding Outdoor</span>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Link href="/engagement-session" customClass="position-relative d-block mt-4 photo-animation" target="">
                            <img src={weddingPortfolio4} className="img-fluid w-75" alt="Engagement Session" />
                            <span className="h2 text-white position-absolute bottom-0 start-50 translate-middle-x">Engagement Session</span>
                        </Link>
                    </div>
                </article>
                <article className="row text-center main-text">
                    <header className="display-3 mb-4">Wedding Photographer</header>
                    <p className="mb-4">The wedding reportage is often complemented by wedding sessions, which I perform at another, agreed with you, date. I invite you to have a look at my portfolio and blog. There you will see the reportage character of my wedding photography, which will give you an idea of what your wedding photos might look like. I try to work unobtrusively as I want the shots to be natural but also intriguing. </p>
                    <p className="mb-4">I photograph weddings <span className="text-800">all over Poland and abroad</span>, my photos show the most beautiful emotions and candid and unposed moments. I love photographing weddings because they are full of romantic elation, but also smiles and emotions, which I try to capture in my frames.</p>
                    <h1 className=" h2 mt-5 mb-4"><i>I will come to you anywhere:  Poland, Europe. The world - there are no borders for me</i></h1>
                    <p className="mb-4">As <span className="text-700">wedding photographer</span> I attach great importance to creating unique wedding photographs for you, which I meticulously arrange into love stories to give you a unique wedding reportage that will be the culmination of that special day. Looking at your wedding photographs you will not only remember how you looked on your wedding day, but also how you felt during those magical moments. I also pay a lot of attention to your surroundings, family and friends, as I know that the relationships with your loved ones will be one of the most precious mementos of your wedding and reception years later. Every wedding photographer tells love stories in their own way - <span className="text-800">if you want me to be the one to write yours, it's essential that we get to know each other!</span> </p>
                </article>
            </div>

        </>

    )
}

export default HomePage