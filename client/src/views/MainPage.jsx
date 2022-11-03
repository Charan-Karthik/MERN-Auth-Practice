import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'

const MainPage = () => {

    const [loggedInUser, setLoggedInUser] = useState(null)
    // const [logOutAction, setLogOutAction] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token)
            if (!user) {
                localStorage.removeItem('token')
            } else {
                console.log(user)
                setLoggedInUser(user.username)
            }
        }
    }, [])

    const logout = () => {
        console.log("i've been clicked")
        localStorage.removeItem('token')
        setLoggedInUser(null)
    }

    return (
        <div>
            <h1>Testing the Main Page</h1>

            { loggedInUser ? <h5>logged in user's username: {loggedInUser}</h5> : <p>please log in/sign up</p>}

            <p>Testing the log out feature: <span onClick={() => logout()}>Log Out</span></p>
        </div>
    )
}

export default MainPage