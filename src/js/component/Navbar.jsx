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
                        ="nav nav-pills d-flex flex-column aria-orientation='vertical' flex-lg-row aria-orientation='horizonal'" >
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link d-inline-flex m-2 active" aria-current="page" href="#inicio" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" ><AiOutlineHome /> Home</a>
                                
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link d-inline-flex m-2" href="#Jumbotron" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><GoInfo /> About</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link d-inline-flex m-2" href="#Card" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><GrServices /> Services</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link d-inline-flex m-2 " href="#" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false"><PiAddressBookLight /> Contact</a>
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

{/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
</div> */}