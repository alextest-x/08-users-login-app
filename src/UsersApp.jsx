import { useContext } from 'react';

import { Navigate, Route, Routes } from "react-router-dom";

//import { Navbar } from './components/layout/Navbar';
//import { UsersPage } from './pages/UsersPage';

import { AuthContext } from "./auth/context/AuthContext";
import { LoginPage } from './auth/pages/LoginPage';
import { UserRoutes } from "./routes/UserRoutes";

export const UsersApp = () => {

    //llamamos lo que estamos utilizando en el useAuht
    //lo pasamos al AuthProvider para utilizar como context
    //const { login, handlerLogin, handlerLogout } = useAuth();

     const { login } = useContext(AuthContext);

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                      <Route path='/*' element={<UserRoutes />} />
                      )
                    :
                    <>
                    <Route path='/login' element={<LoginPage />} />
                             <Route path='/*' element={ <Navigate to ="/login" /> } />

                    </>
    
            }
        </Routes> 
    );
}
