import React, { useContext } from 'react'
import { Context } from '../store/appContext'

function Formulario() {
    const {store, actions} = useContext(Context)
    return (
        <form className='form-size mx-auto mt-5' onSubmit={actions.handleSubmit}>
                    <h1 className='text-center mb-5'>Contact form</h1>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Full name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your name here" onChange={actions.handleFullName} value={store.fullName} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your email here" onChange={actions.handleEmail} value={store.email} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Phone</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your phone number here" onChange={actions.handlePhone} value={store.phone} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Address</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your address here" onChange={actions.handleAddress} value={store.address} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-outline-info ml-2">Get back to contacts</button>
                </form>
    )
}

export default Formulario