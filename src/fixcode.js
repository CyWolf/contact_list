if (isEdit) {
    const store = getStore()
    const editInfo = contacts.map((item) => {
        if (item.id === currentContacts.id) {
            const newContacts = {
                id: currentContacts.id,
                fullname: store.fullName,
                email: store.email,
                phone: store.phone,
                address: store.address,
            }
            return newContacts
        } else {
            return item
        }
    })
    setStore({
        contacts: editInfo,
        fullName: '',
        email: '',
        phone: '',
        address: '',
        isEdit: false,
        currentContacts: {}
    })
} else {
    const id = new Date().getTime()
    const store = getStore()
    const newContacts = {
        id: id,
        fullname: store.fullName,
        phone: store.phone,
        email: store.email,
        address: store.address,
    }
    const contactsConcat = contacts.concat(newContacts)
    setStore({
        contacts: contactsConcat,
        fullName: '',
        email: '',
        phone: '',
        address: '',
    })
},

handleSubmit: (e) => {
    e.preventDefault()
    const store = getStore()
    const id = new Date().getTime()
    const newContacts = {
        id: id,
        fullname: store.fullName,
        phone: store.phone,
        email: store.email,
        address: store.address,
    }
    const contactsConcat = store.contacts.concat(newContacts)
    setStore({
        contacts: contactsConcat,
        fullName: '',
        email: '',
        phone: '',
        address: ''
    })
},