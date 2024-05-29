import React from "react"
import "./Blog.css";
import { blog4, blog7, blog8 } from "../../images";

function Blog() {
    return (
        <>
            <section className="container-lg">
                <div className="row">
                    <div className="col-sm-12 mt-6">
                        <h1 className="display-3 text-center">Blog</h1>
                    </div>
                    <p className="col-sm-12 text-300 text-center text-italic mt-6">30.04.2024</p>
                    <p className="col-12 col-sm-12  text-center h5 "><a href="#">Engagement session with a view of the mountains</a></p>
                    <div className="col-sm-12 d-flex justify-content-center mt-3">
                        <img className="img-fluid" src={blog4} alt="couple" />
                    </div>
                    <div className="d-flex justify-content-center mt-3"> <p className="col-10 col-sm-10 mt-2  "><span className="text-700">Capturing the essence of love against the backdrop of majestic mountains.</span> As a photographer, I had the privilege of witnessing and immortalizing the pure joy and connection between this beautiful couple. The stunning mountain landscape provided the perfect backdrop for their intimate moments, resulting in a series of truly unforgettable images.</p></div>
                    <div className="col-11 col-sm-11 text-end link-underline">
                        <a href="#">See more</a>
                    </div>
                    <p className="col-sm-12 text-300 text-center text-italic mt-6">12.03.2024</p>
                    <p className="col-12 col-sm-12  text-center h5 "><a href="#">Wedding outdoor on the plains</a></p>
                    <div className="col-sm-12 d-flex justify-content-center mt-3">
                        <img className="img-fluid" src={blog7} alt="couple" />
                    </div>
                    <div className="d-flex justify-content-center mt-3"> <p className="col-10 col-sm-10 mt-2  ">As a wedding photographer, capturing the beauty of love amidst the vastness of the plains was an extraordinary experience. The open skies, endless fields, and the couple's love illuminated by the golden hour sun made this outdoor wedding truly <span className="span text-700">Every moment was a testament to the beauty of nature and the power of love</span> </p></div>
                    <div className="col-11 col-sm-11 text-end link-underline">
                        <a href="#">See more</a>
                    </div>
                </div>
                <p className="col-sm-12 text-300 text-center text-italic mt-6">27.02.2024</p>
                <p className="col-12 col-sm-12  text-center h5 "><a href="#">Beautiful session near a historic building</a></p>
                <div className="col-sm-12 d-flex justify-content-center mt-3">
                    <img className="img-fluid" src={blog8} alt="couple" />
                </div>
                <div className="d-flex justify-content-center mt-3"> <p className="col-10 col-sm-10 mt-2  ">The timeless architecture provided a stunning backdrop for the couple's session, adding an extra layer of <span className="text-700">romance</span> and <span className="text-700">elegance</span> to their special day. Every shot was infused with the charm and grandeur of this historic location.</p></div>
                <div className="col-11 col-sm-11 text-end link-underline mb-8">
                    <a href="#">See more</a>
                </div>
            </section>
        </>
    )
}

export default Blog