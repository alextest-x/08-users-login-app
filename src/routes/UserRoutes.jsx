
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { UserProvider } from '../context/UserProvider'
import { useUsers } from "../hooks/useUsers"
import { RegisterPage } from '../pages/RegisterPage'
import { UsersPage } from '../pages/UsersPage'

//export const UserRoutes = ( {login, handlerLogout }) => {
  

  export const UserRoutes = ( ) => {
  /*
  //lo pasamos a UserProvider para usarlo como context
  //para quitar lo props y usarlo en el context
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();
*/


  return (
    <>
          <UserProvider>

         <Navbar />
       <Routes>

            <Route path="users" element= {<UsersPage  />} />
            <Route path="users/register" element= {<RegisterPage />} />
            <Route path="users/edit/:id" element= {<RegisterPage />} />
            <Route path="/" element= { <Navigate to ="/users" /> } />

        </Routes>

        </UserProvider>

    </>


  )
}
