import React from 'react'

const Jumbotron = (props) => {

    return (
        <div className='card bg-light shadow bg-body rounded prin-2'>
            <div className='card-body d-flex justify-content-center flex-column align-items-start'>
                <h1 className='card-title title'>{props.title}</h1>
                <p className='card-text'>{props.text}</p>
                <a className='btn btn-primary'>{props.button}</a>
            </div>
        </div>
    )
}

export default Jumbotron 