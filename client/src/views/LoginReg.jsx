import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginReg = () => {

    const nav = useNavigate();

    const [username, setUsername] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [logEmail, setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")

    const [regErrors, setRegErrors] = useState([])
    const [loginErrors, setLoginErrors] = useState([]);

    const registerUser = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/users/register', {
            username: username,
            email: regEmail,
            password: regPassword,
            confirmPassword: confirmPassword
        })
            .then(res => {
                console.log("SUCCESS", res.data)
                localStorage.setItem('token', res.data.user)
                nav('/')
            })
            .catch(err => {
                console.log("ERROR", err)

                const errorResponse = err.response.data.errors;
                const errorArr = [];

                if (errorResponse) {
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                }

                if (err.response.data.code === 11000) {
                    errorArr.push("Email and/or Username is already in use")
                }

                setRegErrors(errorArr)
            })
    }

    const loginUser = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/users/login', {
            email: logEmail,
            password: logPassword
        })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.user)
                nav('/')
            })
            .catch(err => {
                console.log("ERROR", err)
                setLoginErrors("Incorrect email and/or password")
            })
    }

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-around'>
                {/* Register */}
                <div>
                    {regErrors.map((err, index) => <p style={{ 'color': 'red' }} key={index}>{err}</p>)}

                    <h1>Register</h1>

                    <form className='d-flex flex-column' onSubmit={registerUser}>
                        Username: <input value={username} onChange={e => setUsername(e.target.value)} />

                        {/* add input type email after you check server side validations */}
                        Email: <input value={regEmail} onChange={e => setRegEmail(e.target.value)} />

                        Password: <input type='password' value={regPassword} onChange={e => setRegPassword(e.target.value)} />

                        Confirm Password: <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Register" />
                    </form>
                </div>
                {/* Login */}
                <div>
                    <h1>Log In</h1>

                    {loginErrors ? <p className='text-danger'>{loginErrors}</p> : <></>}

                    <form className='d-flex flex-column' onSubmit={loginUser}>
                        {/* add input type email after you check server side validations */}
                        Email: <input value={logEmail} onChange={e => setLogEmail(e.target.value)} />

                        Password: <input type='password' value={logPassword} onChange={e => setLogPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginReg