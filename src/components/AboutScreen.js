import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
//el context sufre una modificacion y va a notificar a sus hijos con el respectivo cambio, lo que va a forzar el redibujo de cada parte afectada
    const {user, setUser} = useContext ( UserContext)

    const handleClick = () => {
        setUser({}); 
    }

  return (
    <div>
        <h4>AboutScreen</h4>

        <pre>
            {JSON.stringify(user,null,3)}
        </pre>

        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
