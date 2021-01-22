import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
    const {contacts, editContacts, deleteContacts} = props
    return (
        <div className='div-size mx-auto mt-5'>
                <h1 className='text-center mb-5'>Contact list</h1>

                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-success">Add a new contact</button>
                </div>

                {contacts.map((item) => {
                    return (
                        <div className='d-flex justify-content-around mt-2 mb-2 div-contact px-2 py-2'>
                            <div>
                                <i className="fas fa-user icon-profile-size mt-2" />
                            </div>

                            <div>
                                <div>
                                    <h6 className='mb-3'>{item.fullname}</h6>
                                </div>
                                <div className='d-flex'>
                                    <i class="fas fa-map-marker-alt mr-3" />
                                    <p className='contact-font-size'>{item.address}</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fas fa-phone mr-3" />
                                    <p className='contact-font-size'>{item.phone}</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fas fa-envelope mr-3" />
                                    <p className='contact-font-size'>{item.email}</p>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <a href='#' onClick={() => { editContacts(item) }}><i className="fas fa-edit mr-4" /></a>
                                <a href='#' onClick={() => { deleteContacts(item) }}><i className="fas fa-trash" /></a>
                            </div>
                        </div>
                    )
                })}

                <div className='mx-auto'>
                    <Link to='/'>
                        <button type="button" className="btn btn-dark my-5 d-block mx-auto button-home">Home</button>
                    </Link>
                </div>
            </div>
    )
}

export default List