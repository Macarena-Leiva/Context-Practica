import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    //referencia al userContext 
    const {setUser}=useContext(UserContext)
    //extraigo el setUSer

  return (
    <div>
        <h3>LoginScreen</h3>
        <button onClick={()=> setUser({
            id:123,
            name: 'Macarena',

        })} >Login</button>

    </div>
  )
}
