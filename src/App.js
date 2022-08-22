
import { useState } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import {UserContext}  from './components/UserContext'

function App() {

  const [user, setUser] = useState({})

/*   const user ={
    id:123,
    name:'Macarena',
    email: 'macarena.leiva@gmail.com'
  } */

  return (
                        //con value estoy compartiendo el user 
    <UserContext.Provider value={{
      user,
      setUser
    }}> {/* para proveer info a lo largo de todos sus componentes hijos, envuelvo con lo que voy a querer compartir info por medio del value */}
        <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
