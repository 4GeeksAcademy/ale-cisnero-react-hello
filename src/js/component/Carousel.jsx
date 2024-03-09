import React from 'react'
/* IMAGENES */
import Paris from '../../img/pexels-paris.jpg'
import Sydney from '../../img/pexels-sydney.jpg'
import Vzla from '../../img/pexels-venezuela.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active bg-danger">

          {/* ARREGlAR EL RESPONSIVE */}

          <img src={Paris} className="d-block w-100 h-100 " alt='Img de Paris' />
          <div className='carousel-caption top-0 mt-4 d-flex flex-column justify-content-center'>
            <p className='mt-5 fs-3 text-uppercase'>Descrubre tu Ciudad</p>
            <h1 className='display-1 fw-bolder text-uppercase item-edit'>Paris</h1>
            <div className='row d-flex justify-content-between'>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Visitanos</a>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Saber más</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Sydney} className="d-block w-100  h-100" alt='Img de Sydney' />
          <div className='carousel-caption top-0 mt-4 d-flex flex-column justify-content-center'>
            <p className='mt-5 fs-3 text-uppercase text-dark '>Descrubre tu Ciudad</p>
            <h1 className='display-1 fw-bolder text-uppercase text-dark item-edit'>Sydney</h1>
            <div className='row d-flex justify-content-between'>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Visitanos</a>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Saber más</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Vzla} className="d-block w-100 h-100" alt='Img de Vzla' />
          <div className='carousel-caption top-0 mt-4 d-flex flex-column justify-content-center'>
            <p className='mt-5 fs-3 text-uppercase'>Descrubre tu Ciudad</p>
            <h1 className='display-1 fw-bolder text-uppercase item-edit'>Venezuela</h1>
            <div className='row d-flex justify-content-between'>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Visitanos</a>
              <a href="#" className='info d-flex justify-content-center align-items-center fs-5'>Saber más</a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel