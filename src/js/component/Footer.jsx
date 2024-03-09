import React from 'react'
import BanDeVzla from '../../img/pexels-banDeVzla.png'

 

const Footer = () => {
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h3>Hecho por <span>A C</span> </h3>
            <img className='bandera' src={BanDeVzla} alt="Bandera de Vzla" />
            <h5>Copyright © derechos reservados | Web site 2024</h5>
        </div>
    )
}

export default Footer

