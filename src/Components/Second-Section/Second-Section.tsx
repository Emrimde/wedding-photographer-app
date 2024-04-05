import React, { ReactNode } from "react";
import "./Second-Section.css";

type SecondSectionProps = {
    children: ReactNode,
    customClass: string,
}

function SecondSection(props: SecondSectionProps) {
    return (
        <>
            <section className="container-sm">
                <main className="row main-text">
                    <header className="display-1 text-center mb-4 mt-3">Fotografia Ślubna</header>
                    <article>
                        <p><b>Czarująca, cudowna, romantyczna</b> – właśnie taka jest moja fotografia ślubna. Urzekające momenty, niezwykła aura Państwa Młodych, emocje oraz wyjątkowe i klimatyczne miejsca, w których odbywają się uroczystości ślubne -  właśnie to uwielbiam w mojej pracy jako fotograf ślubny. </p>
                        <p className="mb-5">Jestem <b>Photographer's name</b>, a moją pasją i pracą jest <b>fotografia ślubna</b>. Poznajmy się!</p>
                    </article>
                    <article>
                        <h3 className="text-center mb-4"><b>Fotograf ślubny</b>  dla osób, które widzą różnicę</h3>
                        <p>Urzekła mnie fotografia ślubna. Swoim pięknem, swoją niezwykłą aurą, swoim unikalnym otoczeniem. Fotograf ślubny pozwala zatrzymać na obrazie te niezwykłe momenty, gdy rozpoczyna się Wasza wspólna droga. Zostałem fotografem ślubnym z przemyślanego wyboru. Początkowo podejmowałem próby w wielu innych kierunkach, jednak pełną satysfakcję poczułem dopiero, gdy mogłem dokumentować obrazy z tego niezwykłego dnia w życiu innych ludzi. Fotografie ślubne wykonuję głównie na Śląsku i w Małopolsce, w takich miastach jak Kraków, Katowice, Częstochowa, ale chętnie wykonam dla Was reportaż ślubny w każdym zakątku Polski i świata. Dla pięknych kadrów ślubnych jestem w stanie pokonać wiele kilometrów.</p>
                    </article>
                    <article>
                        <h3 className="text-center mb-4 display-3">Fotografia ślubna - dla Ciebie </h3>
                        <p>Jako fotograf ślubny przywiązuję wagę nie tylko do tego, aby Wasz reportaż ślubny był przepiękny – ogromnie ważne jest dla mnie aby był unikalny, niepowtarzalny oraz żebyście ze wzruszeniem i uśmiechem mogli po latach przeglądać swój album ślubny.</p>

                        <p>Nie lubię sztucznych, ustawianych kadrów i nie ingeruję w przebieg ślubu i wesela – czuję za to ogromną ekscytację tworząc fotografie ślubne z najważniejszego dnia w Waszym życiu. Emocje, jakie towarzyszą mi, są bardzo podobne do tych jakie Wy przeżywacie w dniu ślubu – ekscytujące oczekiwanie, poprzez wzruszenia podczas ceremonii, a kończąc na radosnej zabawie. To właśnie jest kwintesencja zdjęć ślubnych.</p>
                    </article>
                    <header className="mt-4 mb-5 text-center display-4">Zobacz moje portfolio!</header>
                </main>

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
                                <img src={require('../../images/wedding-portfolio-3.jpg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                    </article>
                </div>



            </section>
        </>)
}

export default SecondSection