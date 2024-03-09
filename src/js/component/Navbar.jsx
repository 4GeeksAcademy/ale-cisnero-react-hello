import React from "react"

/* ICONS */
import { AiOutlineHome } from "react-icons/ai"
import { GoInfo } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { PiAddressBookLight } from "react-icons/pi";

import logoViajes from '../../img/logo-viajes1.png'

const Navbar = () => {
    return (
        <nav className
            ="navbar navbar-expand-lg bg-body-tertiary shadow rounded fixed-top m-1">
            <div className
                ="container-fluid ">
                <a className
                    ="navbar-brand me-auto" href="#inicio">
                        <img src={logoViajes} alt="logo" className="imgLogo-edit me-2"/>
                        Start Boostrap</a>
                <div className
                    ="collapse navbar-collapse  justify-content-center" id="navbarNav">
                    <ul className
                        ="navbar-nav" >
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link active" aria-current="page" href="#inicio"><AiOutlineHome /> Home</a>
                                
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#Jumbotron"><GoInfo /> About</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#Card"><GrServices /> Services</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#"><PiAddressBookLight /> Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="login-button">Login</a>
                <button className
                    ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className
                        ="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Navbar