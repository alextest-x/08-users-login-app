import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";


/*
    {
        id: 1,
        username: 'pepe',
        password: '12345678',
        email: 'pepe@correo.com'
    },
];


 const initialUserForm = {
   id: 0,
   username: '',
   password: '',
   email: '',
}
*/


export const UsersPage = () => {


//export const UsersPage = ({
     
      //users,
      //userSelected,
      //initialUserForm,
      //visibleForm,
      //handlerAddUser,
      //handlerRemoveUser,
      //handlerUserSelectedForm,
      //handlerOpenForm,
      //handlerCloseForm,
    
   // }) => {

  /*
    //pasamos este bloque a useUser.js que es un hook
    //users nueva constante donde modifica la lista de usuarios
    //y ponemos el users en  users={initialUsers} 
    //const [users, dispatch] = useReducer(usersReducer, initialUsers);
    
    //selecionar un usuario
    //const [userSelected, setUserSelected] = useState(initialUserForm);
  */


  /*
  //pasamos este bloque a useUser.js que es un hook
    const handlerAddUser = (user) => {

        let type; 

        if(user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser';
        }

         console.log(user);
             //enviando los cambios 
        dispatch({
            //type: 'addUser',
            //type: type, se simplifica poruqeu tiene el mismos nombre que el atributo
            type,
            payload: user,
        })
    }


    const handlerRemoveUser = (id) =>{
        console.log(id)
        //dispatch llama la action del reducer 
        //pasamos el objeto por parametro con el type 
        dispatch({
            type: 'removeUser',
            payload: id,
        })

    }

    const handlerUserSelectedForm = (user) => {
         console.log(user)
        //pasando los datos con ...user un clon 
        //se crea una nueva instancia queda inmutable
        setUserSelected({ ...user });
    }

    */

    //desestructuramos 
    const {
      users,
      //userSelected,
      //initialUserForm,
      visibleForm,
      //handlerAddUser,
      //handlerRemoveUser,
      //handlerUserSelectedForm,
      handlerOpenForm,
      //handlerCloseForm,
      getUsers, //ejecutar este evento con un useEffect();
      //} = useUsers();
    
    } = useContext(UserContext);


    useEffect(() => {
        getUsers();
    }, []);


      /*
      quitamos de return <LoginPage />
      */

    return ( 
        <> 

    {!visibleForm || 
        <UserModalForm />}
        
    <div className="container my-4">
        <h2>Users App</h2>
       
         <div className="row">
            <div className="col">
            
               {visibleForm || <button 
                  className="btn btn-primary my-2"
                  onClick={handlerOpenForm}>
                  Nuevo Usuario
                </button> }

                    { 
                      users.length === 0
                      ? <div className="alert alert-warning"> No hay usuarios en el sistema </div>
                      : <UsersList />
                
                   }
            </div>  

        </div>
    
      </div>

     </> 
   );

}