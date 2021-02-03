import React from 'react'
import { Link } from 'react-router-dom'

function Formulario(props) {
    const {handleSubmit, handleFullName, handleEmail, handlePhone, handleAddress, fullName, email, phone, address} = props
    return (
        <div>
                <form className='form-size mx-auto mt-5' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-5'>Contact form</h1>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Full name</label>
                        <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your name here" onChange={handleFullName} value={fullName} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Email</label>
                        <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your email here" onChange={handleEmail} value={email} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Phone</label>
                        <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your phone number here" onChange={handlePhone} value={phone} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Address</label>
                        <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Writte your address here" onChange={handleAddress} value={address} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to='/ContactListUSeHistory/Lista'>
                    <button type="button" className="btn btn-outline-info ml-2">Get back to contacts</button>
                    </Link>
                </form>
            </div>
    )
}

export default Formulario