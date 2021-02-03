import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function SignUp() {

    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usersList, setUsersList] = useState([])
    //----------------------------------------------------------------------------------------------
    const getSignUp = () => {
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
            name,
            email,
            phone,
            password,
        }
        if (password === confirmPassword) {
            fetch('https://crud-placeholder.herokuapp.com/api/v1/post_user/', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'success') {
                    setName('')
                    setPhone('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    history.push('/ContactListFetch/Login')
                } else {
                    alert('wrong user!')
                }
            })
            .catch((error) => console.log('Error:', error));
        } else {
            alert('Passwords do not match')
        }
        
    }
    //----------------------------------------------------------------------------------------------
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    //----------------------------------------------------------------------------------------------

    return (
        <div className='div-users mx-auto mt-5'>
            <Link to='/ContactListFetch/Login'>
                <button type="button" className="btn btn-primary mb-3">Back to login</button>
            </Link>
            <form onSubmit={handleLogin}>
                <h4 className="text-center">Register</h4>
                <input required type="text" className="form-control" placeholder="User name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleName} value={name} />
                <input required type="text" className="form-control" placeholder="Phone number" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handlePhone} value={phone} />
                <input required type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleEmail} value={email} />
                <input required type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handlePassword} value={password} />
                <input required type="password" className="form-control" placeholder="Confirm password" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleConfirmPassword} value={confirmPassword} />
                <button type="submit" className="button-add-ut btn btn-success mt-2">Sign up</button>
            </form>
        </div>

    )
}

export default SignUp