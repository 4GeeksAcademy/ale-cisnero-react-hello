import React, {useState} from 'react'


const Card = (props) => {

    const {color1, color2} = props

    //useState para cambiar el color con clases de bootstrap
    const [color, setColor] = useState(false)

    const cambiarColor = () => setColor(prev => !prev)

    return (
        <div className={`card mt-3 shadow bg-body rounded bg-primary card-edit ${color ? color1 : color2}`}>
            <img className="card-img-top img-card" src={props.imgUrl} alt={`Img de ${props.imagenAlt}`} />
            <div className='card-body'>

                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between">
                <a className='btn btn-primary'>{props.button}</a>
                <button className='btn btn-outline-primary' onClick={cambiarColor}>Cambiar Color</button>
            </div>
        </div>

    )
}

export default Card