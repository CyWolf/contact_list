const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            contacts: [],
        },

        actions: {
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
            }
        }
    }
}
export default getState