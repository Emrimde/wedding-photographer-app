import React from "react";
import "./OfferSection.css";
import { offerSection1 } from "../../images";


function OfferSection() {
    return (<>

        <main className="container">
            <div className="row">
                <h1 className="text-center display-3 mt-3">Wedding offer</h1>
            </div>
            <div className="row mt-3">
                <div className="text-center">
                    <img src={offerSection1} alt="couple" />
                </div>
            </div>

            <div className="row mt-5">
                <div>
                    <p className="text-start px-3 fs-5">If you are dreaming of original yet natural photographs from a wedding and reception kept in a reporter's atmosphere, I invite you to come and see me. A wedding is a unique event. It is worth keeping it for longer. My recipe for unique wedding photographs is simple. I try to capture the moment. I am everywhere, but as if I am not there. I juggle frames and capture the most fleeting ones.</p>
                </div>
                <hr></hr>
                <h1 className="text-center my-4">Offer</h1>
                <div className="row mb-2 mt-5 ">
                    <div className="col-md-4 col-sm-6 col-xs-12 bg-secondary-subtle pb-5">
                        <h1>Package 1</h1>
                        <small>Brief Reportage</small>
                        <ul>
                            <li> up to 8 hours of reportage,</li>
                            <li>optional short outdoor session on the wedding day,</li>
                            <li>overall <strong>min. 300 photos </strong>submitted in digital form
                                <ul>
                                    <li>min. 100 photographs subjected to author's graphic processing</li>
                                    <li>min. 200 photos with basic correction (white balance, exposure, contrast, saturation)</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 pb-5">
                        <h1>Package 2</h1>
                        <small>Full Reportage</small>
                        <ul><li> up to 12 hours of reportage,</li><li>optional short outdoor session on the wedding day,</li><li>overall<strong> min. 500 photos </strong>submitted in digital form:<ul><li>min. 300 photographs subjected to author's graphic processing</li><li>min. 300 photographs subjected to author's graphic processing, (white balance, exposure, contrast, saturation)</li></ul></li></ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 bg-secondary-subtle pb-5">
                        <h1>Package 3</h1>
                        <small>Extended Reportage</small>
                        <ul>
                            <li> up to 14 hours of reportage,</li>
                            <li>optional short outdoor session on the wedding day,</li>
                            <li>overall<strong> min. 800 photos </strong>submitted in digital form:<ul>
                                <li>min. 300 photographs subjected to author's graphic processing,</li>
                                <li>min. 500 images subjected to basic correction (white balance, exposure, contrast, saturation)</li>
                            </ul>
                            </li>

                        </ul>
                    </div>


                </div>

            </div>



        </main>

    </>)

}

export default OfferSection