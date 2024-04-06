
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './AuthContext';




//es un componente que tiene hijos
export const AuthProvider = ( {children} ) => {

    const { login, handlerLogin, handlerLogout } = useAuth();


// los values tienen toda la data
  return (
    <AuthContext.Provider value={

        {

            login,
            handlerLogin,
            handlerLogout
        }

    } >

      {children}
    </AuthContext.Provider>

    
  )
}
