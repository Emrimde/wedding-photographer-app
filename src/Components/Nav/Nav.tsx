import React from "react";
import "./Nav.css";

function Nav(){
    return(
    <nav className="navigation-background">
        <div className="container-lg">
            <div className="row">
                <div className="col-sm-4 group-of-links">
                    <h1>Homepage</h1></div>
                <div className="col-sm-8 group-of-links"> 
                    <h2 className="col-sm-2">About me</h2>
                    <h2 className="col-sm-2">Offer</h2>
                    <h2 className="col-sm-2">Contact</h2>
                    <h2 className="col-sm-2">Gallery</h2>
                    <h2 className="col-sm-2">Contact Form</h2>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default Nav