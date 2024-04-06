
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { UserContext } from '../context/UserContext';

//userSelected pasamos el id en la pagina lo tenemos en el initialUserForm



//users=[] ponemos un arrglo vacio para que no de error cuando traiga un error nulo
//pasamoa los datos auna varibale para manejar en el context
//export const RegisterPage = ( { users=[], handlerAddUser, initialUserForm }) => {

export const RegisterPage = () => {
  // const { users=[], /*handlerAddUser,*/ initialUserForm } =useContext(UserContext);
   
   const { users=[], initialUserForm } = useContext(UserContext);

    const [userSelected, setUserSelected]= useState(initialUserForm);


    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        //valida si trae el id sino se sale
        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSelected(user);
        }
    }, [id])
       //}, [id, initialUserForm, users]);

  return (

    <div className="container my-4">
         
         <h4> {userSelected.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
        
        <div className="row">
      

            <div className="col">

                <UserForm 
                 userSelected={userSelected} />
            
            </div>
        </div>
    </div>

  )
}
