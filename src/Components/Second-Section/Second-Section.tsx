import React, { ReactNode } from "react";
import "./Second-Section.css";
import Link from "../Link/Link.tsx";

type SecondSectionProps = {
    children: ReactNode,
    customClass: string,
}

function SecondSection(props: SecondSectionProps) {
    return (
        <>
            <section className="container-sm">
                <main className="row main-text">
                    <header className="display-1 text-center mb-4 mt-3">Wedding photography</header>
                    <article>
                        <p><b>Charming, wonderful, romantic</b> - That is exactly what my wedding photography is. Captivating moments, the extraordinary aura of the bride and groom, emotions and unique and atmospheric wedding venues - this is what I love about my work as a wedding photographer. </p>
                        <p className="mb-5">I am <b>Photographer's name</b>and my passion and work is <b>wedding photography</b>. Let's get to know each other!</p>
                    </article>
                    <article>
                        <h3 className="text-center mb-4"><b>Wedding Photographer</b>  for people which see a difference</h3>
                        <p>I was captivated by wedding photography. With its beauty, with its extraordinary aura, with its unique surroundings. A wedding photographer allows you to freeze in images those extraordinary moments when your journey together begins. I became a wedding photographer out of a deliberate choice. Initially, I attempted many other avenues, but I only felt full satisfaction when I was able to document images from this extraordinary day in other people's lives. I take wedding photographs mainly in Silesia and Malopolska regions, in cities such as Krakow, Katowice, Czestochowa, but I will be happy to make a wedding reportage for you in any corner of Poland and the world. For beautiful wedding frames I am able to travel many kilometres.</p>
                    </article>
                    <article>
                        <h3 className="text-center my-4 display-3">Wedding Photography - FOR YOU!</h3>
                        <p>As a wedding photographer, I don't just want your wedding photo shoot to be beautiful - it is extremely important to me that it is unique, unrepeatable and that you can look back on your wedding album years later with emotion and a smile.</p>

                        <p>I don't like artificial, set frames and I don't interfere with the wedding and reception - instead, I feel great excitement creating wedding photographs of the most important day of your life. The emotions I experience are very similar to the ones you experience on your wedding day - the excitement of anticipation, through the emotion of the ceremony and ending with the joyful revelry. This is the essence of wedding photography.</p>
                    </article>
                    <header className="mt-4 mb-5 text-center display-4">Watch my portfolio!</header>
                </main>
            </section>
            <div className="container-sm">
                <article className="row mb-5 text-center d-flex justify-content-center ">
                    <div className="card card-style m-4">
                        <img src={require('../../images/wedding-portfolio-1.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card card-style m-4">
                        <img src={require('../../images/wedding-portfolio-2.webp')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card card-style m-4">
                        <img src={require('../../images/wedding-portfolio-3.jpg')} className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </article>
                <article className="row text-center main-text">
                    <header className="display-2 mb-4">Wedding Photographer</header>
                    <p className="mb-4">The wedding reportage is often complemented by wedding sessions, which I perform at another, agreed with you, date. I invite you to have a look at my portfolio and blog. There you will see the reportage character of my wedding photography, which will give you an idea of what your wedding photos might look like. I try to work unobtrusively as I want the shots to be natural but also intriguing. </p>
                    <p className="mb-4">I photograph weddings all over Poland and abroad, my photos show the most beautiful emotions and candid and unposed moments. I love photographing weddings because they are full of romantic elation, but also smiles and emotions, which I try to capture in my frames.</p>
                    <h3 className="mt-5 mb-4"><i>I will come to you anywhere:  Poland, Europe. The world - there are no borders for me</i></h3>
                    <p>As <b>wedding photographer</b> I attach great importance to creating unique wedding photographs for you, which I meticulously arrange into love stories to give you a unique wedding reportage that will be the culmination of that special day. Looking at your wedding photographs you will not only remember how you looked on your wedding day, but also how you felt during those magical moments. I also pay a lot of attention to your surroundings, family and friends, as I know that the relationships with your loved ones will be one of the most precious mementos of your wedding and reception years later. Every wedding photographer tells love stories in their own way - if you want me to be the one to write yours, it's essential that we get to know each other! </p>
                </article>
            </div>
            <footer className="bg-success">
                <div className="container-sm">
                <footer className="  row  d-flex justify-content-center mt-5"> 
                    <aside className="col-sm-4">
                        <header className="h2 text-center h1">Contact</header>
                        <p>Phone number 000-000-000</p>
                        <p>photographersname@gmail.com</p>
                    </aside>
                    <aside className="col-sm-4">
                        <header className="h2 text-center" >[Photographer's name]</header>
                    </aside>
                    <aside className="col-sm-4">
                        <header className="h2 text-center">Follow me on</header>
                        <p><Link href="#" customClass="text-decoration-none">Facebook</Link>
                        
                        </p>
                        <p><Link href="#" customClass="text-decoration-none">Instagram</Link>
                        
                        </p>
                        <p><Link href="#" customClass="text-decoration-none">Twitter</Link>
                        
                        </p>
                    </aside>
                 </footer>
                 <p className="text-center m-0">All rights reserved &copy; 2024 - My Company</p>
                </div>
               
            </footer>



        </>)
}

export default SecondSection