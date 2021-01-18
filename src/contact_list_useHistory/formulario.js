import React from 'react'

function Formulario() {
    return (
        <form className='form-size mx-auto mt-5'>
            <h1 className='text-center mb-5'>Contact form</h1>
            <div className="form-group">
                <label for="formGroupExampleInput">Full name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your name here" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your email here" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your phone number here" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your address here" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-outline-info ml-2">Get back to contacts</button>
        </form>
    )
}

export default Formulario