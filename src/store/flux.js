const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            contacts: [],
            isEdit: false,
            currentContacts: {},
        },

        actions: {
            handleSubmit: (e) => {
                const store = getStore()
                e.preventDefault()
                if (store.isEdit) {
                    const store = getStore()
                    const editInfo = store.contacts.map((item) => {
                        if (item.id === store.currentContacts.id) {
                            const newContacts = {
                                id: store.currentContacts.id,
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
                    const contactsConcat = store.contacts.concat(newContacts)
                    setStore({
                        contacts: contactsConcat,
                        fullName: '',
                        email: '',
                        phone: '',
                        address: '',
                    })
                }
            },


            handleFullName: (e) => {
                setStore({ fullName: e.target.value })
            },
            handleEmail: (e) => {
                setStore({ email: e.target.value })
            },
            handlePhone: (e) => {
                setStore({ phone: e.target.value })
            },
            handleAddress: (e) => {
                setStore({ address: e.target.value })
            },
            editContacts: (item) => {
                setStore({
                    fullName: item.fullName,
                    email: item.email,
                    phone: item.phone,
                    address: item.address,
                    isEdit: true,
                    currentContacts: item,
                })
            },
            deleteContacts: (item) => {
                const store = getStore()
                const erase = store.contacts.filter((trash) => {
                    return trash.id !== item.id
                })
                setStore({
                contacts: erase,
            })
            },
        }
    }
}
export default getState