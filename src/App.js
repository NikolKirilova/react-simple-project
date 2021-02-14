import React, { useState, useEffect } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'


const App = (props) => {
    const [user, setUser] = useState(props.user ? {
        ...props.user,
        loggedIn: true
      } : null)
      const origamis = props.origami || []


    const logIn = (userObject) => {
        setUser({
            ...userObject,
            loggedIn: true
        })
    }
    
    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setUser({
            loggedIn: false
        })
    }


    return (
        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>

            {props.children}
        </UserContext.Provider>
    )

}

export default App