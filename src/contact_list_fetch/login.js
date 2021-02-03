import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usersList, setUsersList] = useState([])
    //----------------------------------------------------------------------------------------------
    const getLogin = () => {
        fetch('https://crud-placeholder.herokuapp.com/api/v1/get_all_users/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                setUsersList()
            })
            .catch((error) => console.log('Error:', error));
    }
    //----------------------------------------------------------------------------------------------
    const handleLogin = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        fetch('https://crud-placeholder.herokuapp.com/api/v1/login_user/', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'success') {
                    setEmail('')
                    setPassword('')
                    history.push('/ContactListFetch/List')
                } else {
                    alert('wrong user!')
                }
            })
            .catch((error) => console.log('Error:', error));
    }
    //----------------------------------------------------------------------------------------------
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    //----------------------------------------------------------------------------------------------

    return (
        <div className='div-users mx-auto mt-5'>
            <Link to='/ContactListFetch/SignUp'>
                <button type="button" className="btn btn-primary mb-3">Sign up</button>
            </Link>
            <form onSubmit={handleLogin}>
                <h4 className="text-center">Member login</h4>
                <input required type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleEmail} value={email} />
                <input required type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handlePassword} value={password} />
                <button type="submit" className="button-add-ut btn btn-success mt-2">Login</button>
            </form>
        </div>

    )
}

export default Login