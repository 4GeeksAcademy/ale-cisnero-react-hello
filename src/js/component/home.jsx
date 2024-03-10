import React from "react";
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

/* IMAGENES */
import Paris from '../../img/pexels-paris.jpg'
import Sydney from '../../img/pexels-sydney.jpg'
import Vzla from '../../img/pexels-venezuela.jpg'
import Pavoreal from '../../img/pexels-pavoreal.jpg'
import Carousel from "./Carousel.jsx";

//include images into your bundle
//Objecto para cambiar de colores las card
let colors = {
	red : 'bg-danger',
	blue : 'bg-primary',
	green : 'bg-success',
	yellow : 'bg-warning',
	grey : 'bg-light',
	black : 'bg-dark',
}

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>

			<div id="inicio">
				<Carousel />
			</div>
			<div className='prin container-fluid mt-3'>

				<div className='prin-2' id="Jumbotron">
					<Jumbotron
						title='A Warm Welcome'
						text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ex corrupti soluta reprehenderit harum iusto odio beatae hic eaque pariatur dignissimos dolor, ut, impedit aut temporibus sit esse facilis vel.'
						button='Call to Action!'
					/>
				</div>

				<div className='row justify-content-center card-edit-contenedor' id="Card">
					<div className='col-12 col-sm-9 col-md-6 col-xxl-3 mb-3'>
						<Card
							imgUrl={Paris}
							imagenAlt='Paris'
							title='Paris France Card'
							text='París es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia (o «Región Parisina»), constituye el único departamento unicomunal del país.'
							button='Find Out More!'
							color1={colors.red}
							color2={colors.light}
							
						/>
					</div>
					<div className='col-12 col-sm-9 col-md-6 col-xxl-3 mb-3'>
						<Card
							imgUrl={Sydney}
							imagenAlt='Sydney'
							title='Sydney Australia Card'
							text='Sídney es la ciudad más grande y poblada de Australia y Oceanía. En junio de 2020, la población metropolitana estimada de Sídney era de 5 361 466 habitantes. Es la capital del estado de Nueva Gales del Sur y fue el asentamiento de la primera colonia británica en Australia. Fue fundada en 1788 en la cala de Sídney por Arthur Phillip, almirante de la Primera Flota de Gran Bretaña, y es la ciudad más antigua del país'
							button='Find Out More!'
						/>
					</div>
					<div className='col-12 col-sm-9 col-md-6 col-xxl-3 mb-3'>
						<Card
							imgUrl={Vzla}
							imagenAlt='Venezuela'
							title='Canaima Venezuela Card'
							text='El Parque Nacional Canaima es un parque nacional ubicado en el estado Bolívar, Venezuela. Fue instaurado el 12 de junio de 1962 y declarado Patrimonio de la Humanidad por la Unesco en el año 1994.'
							button='Find Out More!'
						/>
					</div>
					<div className='col-12 col-sm-9 col-md-6 col-xxl-3 mb-3'>
						<Card
							imgUrl={Pavoreal}
							imagenAlt='pavoreal'
							title='Pavoreal South Africa Card'
							text='El pavo real común (Pavo cristatus), también conocido como pavo real de la India o pavo real de pecho azul es una especie de ave galliforme de la familia Phasianidae, una de las dos especies del género Pavo, que desde tiempos antiguos destacó entre los animales admirados por el ser humano a causa del extraordinario abanico policromado que constituye la cola de los machos.'
							button='Find Out More!'
						/>
					</div>
				</div>
			</div>

			<div className='footer mt-3'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;




