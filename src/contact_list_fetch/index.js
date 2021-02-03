import React, { useState } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

import Login from './login'
import SignUp from './sign-up'
import Formulario from './formulario'
import List from './list'

function ContactListFetch() {

    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [contacts, setContacts] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [currentContacts, setCurrentContacts] = useState({})
    //----------------------------------------------------------------------------------------
    const getContacts = () => {
        fetch('https://crud-placeholder.herokuapp.com/api/v1/get_all_contactList/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                setContacts(data.contacts)
            })
            .catch((error) => console.log('Error:', error));
    }
    //----------------------------------------------------------------------------------------
    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    //----------------------------------------------------------------------------------------
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    //----------------------------------------------------------------------------------------
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    //----------------------------------------------------------------------------------------
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    //----------------------------------------------------------------------------------------
    const handleSubmit = (e) => {
        (e).preventDefault()
        if (isEdit) {
            const contactData = {
                name,
                email,
                phone,
                address,
            }
            fetch(`https://crud-placeholder.herokuapp.com/api/v1/put_contactList/${currentContacts._id}`, {
                method: "PUT",
                body: JSON.stringify(contactData),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    setName('')
                    setEmail('')
                    setPhone('')
                    setAddress('')
                    setIsEdit(false)
                    history.push('/ContactListFetch/List')
                    getContacts()
                })
                .catch((error) => console.log('Error:', error));
        } else {
            const newContact = {
                name: name,
                email,
                phone,
                address,
            }
            console.log(newContact)
            fetch(`https://crud-placeholder.herokuapp.com/api/v1/post_contactList/`, {
                method: "POST",
                body: JSON.stringify(newContact),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    setName('')
                    setEmail('')
                    setPhone('')
                    setAddress('')
                    history.push('/ContactListFetch/List')
                    getContacts()
                })
                .catch((error) => console.log('Error:', error));
        }
    }
    //----------------------------------------------------------------------------------------
    const editContacts = (item) => {
        setName(item.name)
        setEmail(item.email)
        setPhone(item.phone)
        setAddress(item.address)
        setIsEdit(true)
        setCurrentContacts(item)
        history.push('/ContactListFetch/Formulario')
    }
    //----------------------------------------------------------------------------------------
    const deleteContacts = (item) => {
        fetch(`https://crud-placeholder.herokuapp.com/api/v1/delete_one_contactList/${item._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                getContacts()
            })
            .catch((error) => console.log('Error:', error));
    }
    //----------------------------------------------------------------------------------------

    return (
        <>
            <Switch>

                <Route path='/ContactListFetch/Login'>
                    <Login />
                </Route>

                <Route path='/ContactListFetch/SignUp'>
                    <SignUp />
                </Route>

                < Route path='/ContactListFetch/Formulario'>
                    < Formulario
                        handleSubmit={handleSubmit}
                        handleName={handleName}
                        handleEmail={handleEmail}
                        handlePhone={handlePhone}
                        handleAddress={handleAddress}
                        name={name}
                        email={email}
                        phone={phone}
                        address={address}
                    />
                </Route>

                < Route path='/ContactListFetch/List'>
                    < List
                        contacts={contacts}
                        editContacts={editContacts}
                        deleteContacts={deleteContacts}
                    />
                </Route>

            </Switch>
        </>
    )
}

export default ContactListFetch