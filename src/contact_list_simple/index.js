import React, { useState } from 'react'
import Formulario from './formulario'
import List from './lista'

function ContactListSimple() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [contacts, setContacts] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [currentContacts, setCurrentContacts] = useState({})
    //----------------------------------------------------------------------------------------
    const handleSubmit = (e) => {
        (e).preventDefault()
        if (isEdit) {
            const editInfo = contacts.map((item) => {
                if (item.id === currentContacts.id) {
                    const newContacts = {
                        id: currentContacts.id,
                        fullname: fullName,
                        email: email,
                        phone: phone,
                        address: address,
                    }
                    return newContacts
                } else {
                    return item
                }
            })
            setContacts(editInfo)
            setFullName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setIsEdit(false)
            setCurrentContacts({})
        } else {
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
    //----------------------------------------------------------------------------------------
    const editContacts = (item) => {
        setFullName(item.fullName)
        setEmail(item.email)
        setPhone(item.phone)
        setAddress(item.address)
        setIsEdit(true)
        setCurrentContacts(item)
    }
    //----------------------------------------------------------------------------------------
    const deleteContacts = (item) => {
        const erase = contacts.filter((trash) => {
            return trash.id !== item.id
        })
        setContacts(erase)
    }
    //----------------------------------------------------------------------------------------

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
                contacts={contacts}
                editContacts={editContacts}
                deleteContacts={deleteContacts}
            />
        </>
    )
}

export default ContactListSimple
