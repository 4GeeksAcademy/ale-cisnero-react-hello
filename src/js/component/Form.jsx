import React from 'react'

const Form = () => {
    return (
        <div className='card mb-3 shadow bg-body rounded col-12 col-md-8 col-lg-6' style={{marginTop: '100px'}}>

            <div className='card-header'>
                <h5 className='card-title text-center'>Formulario</h5>
            </div>
            <div className='card-body'>
                <div class="mb-3">
                    <div className='row d-flex flex-md-column align-items-center flex-lg-row  justify-content-center pb-3'>
                        <div className='col-12 col-md-9 col-lg-6 col-xxl-4 mb-xxl-0 mb-lg-3 mb-md-3 mb-3'>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su Nombre" />
                        </div>
                        <div className='col-12 col-md-9 col-lg-6 col-xxl-4 mb-xxl-0 mb-lg-3 mb-md-3 mb-3'>
                            <input type="surname" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su Apellido" />
                        </div>
                        <div className='col-12 col-md-9 col-lg-6 col-xxl-4 '>
                            <input type="identidad" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su Documento de Identidad" />
                        </div>
                    </div>

                    <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Ingrese su correo example: name@example.com" />
                </div>
                <div class="mb-3">

                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese un comentario"></textarea>
                </div>
            </div>
            <div className='card-footer d-flex justify-content-end'>
                <button className='btn btn-success'>Enviar</button>
                <button className='btn btn-outline-success ms-3'>Borrar</button>
            </div>
        </div >
    )
}

export default Form