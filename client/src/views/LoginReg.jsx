import { useState } from 'react'
import axios from 'axios'

const LoginReg = () => {
    
    const [username, setUsername] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [logEmail, setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")

    const registerUser = e => {
        e.preventDefault()
    }

    const loginUser = e => {
        e.preventDefault()
    }
    
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-around'>
                {/* Register */}
                <div>
                    <h1>Register</h1>
                    <form className='d-flex flex-column' onSubmit={registerUser}>
                        Username: <input value={username} onChange={e => setUsername(e.target.value)}/>
                        {/* add input type email after you check server side validations */}
                        Email: <input value={regEmail} onChange={e => setRegEmail(e.target.value)}/>
                        Password: <input type='password' value={regPassword} onChange={e => setRegPassword(e.target.value)} />
                        Confirm Password: <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Register"/>
                    </form>
                </div>
                {/* Login */}
                <div>
                    <h1>Log In</h1>
                    <form className='d-flex flex-column' onSubmit={loginUser}>
                        {/* add input type email after you check server side validations */}
                        Email: <input value={logEmail} onChange={e => setLogEmail(e.target.value)} /> 
                        Password: <input type='password' value={logPassword} onChange={e => setLogPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginReg