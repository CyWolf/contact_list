import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='text-center my-5'>Ejercicios: Contact List</h1>
            
            <div className=''>

                <Link to='/ContactListSimple'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">Contact list simple</button>
                </Link>

                <Link to='/ContactListContextApi'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">Contact list context api</button>
                </Link>

                <Link to='/ContactListUSeHistory'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">Contact list useHistory</button>
                </Link>

            </div>
        </>
    )
}

export default Home