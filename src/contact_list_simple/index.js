import React, { useState } from 'react'
import Formulario from './formulario'
import List from './lista'

function ContactListSimple() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [contacts, setContacts] = useState([])
    //----------------------------------------------------------------------------------------
    const handleSubmit = (e) => {
        (e).preventDefault()
        const id = new Date().getTime()
        const newContacts = {
            id: id,
            fullname: fullName,
            phone: phone,
            email: email,
            address: address,
        }
        const contactsConcat = contacts.concat(newContacts)
        setContacts(contactsConcat)
        setFullName('')
        setEmail('')
        setPhone('')
        setAddress('')

    }
    //----------------------------------------------------------------------------------------
    const handleFullName = (e) => {
        setFullName(e.target.value)
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

    return (
        <>
            < Formulario
                handleSubmit={handleSubmit}
                handleFullName={handleFullName}
                handleEmail={handleEmail}
                handlePhone={handlePhone}
                handleAddress={handleAddress}
                fullName={fullName}
                email={email}
                phone={phone}
                address={address}
            />

            < List 
            contacts = {contacts}
            />
        </>
    )
}

export default ContactListSimple
