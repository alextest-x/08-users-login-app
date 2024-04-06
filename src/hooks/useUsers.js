import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { findAll, remove, save, update } from "../services/UserService";


  /*
    //se comenta porque se pone el axios para la conexion 
    //con el backend y dejamos vacio el arreglo 
    const initialUsers = [
       {
            id: 1,
            username: 'pepe',
            password: '1234',
            email: 'pepe@correo.com'
        },
    ];
  */     
      
    const initialUsers = [];
    


    const initialUserForm = {
        id: 0,
        username: '',
        password: '',
        email: '',
    }
        

export const useUsers = () => {


    //users nueva constante donde modifica la lista de usuarios
    //y ponemos el users en  /*users={initialUsers}*/ 
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    //selecionar un usuario
    const [userSelected, setUserSelected] = useState(initialUserForm);

    //maneja el cambio de estado del boton visble formulario
    const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();
   

    //funcion para el backend que viene del service
    //le ponemos el async y el await 
    //y la agregamos en el return getUsers

    //el await es para recibir la respuesta convertirla a json para actualizar el estado en react
    const getUsers = async () => {
        //findAll() viene del service para la conexion con el backend
        const result = await findAll();
        console.log('result: '+ result);
        //lo gradarmos en el estado
        dispatch({
          type: 'loadingUsers',
          payload: result.data,
        });
    }


    //el await es para recibir la respuesta convertirla a json para actualizar el estado en react
    //simpre que lleva await debe llevar el async en la funcion 
    // y para actualizarlo se requiere el id
    const handlerAddUser =async (user) => {
        let  response;
        if ( user.id === 0 ) {
          response = await save(user); 
        } else {
          response = await update(user);
        }

        //user es igual a cero agrega sino actualiza
        //let type; (user=== 0) ? 'addUser' : 'updateUser';
        /*
        let type; 
        if(user.id === 0) {
          type = 'addUser';
        } else {
            type = 'updateUser';
        }
        */

        //console.log(user);
             //enviando los cambios 
        dispatch({
            //type: 'addUser',
            //type: type, se simplifica porque tiene el mismos nombre que el atributo
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            //comentamos porque ahora el payload trae el user actualizado
            //payload: user,
            
            //aqui en el response.data trae el user actualizado
            payload: response.data,
        });
        Swal.fire(
            (user.id === 0 ) ? 
            'Usuario Registrado' :
            'Usuario Actualizado',
            (user.id === 0 ) ? 
            'El usuario ha sido creado con exito!' :
            'El usuario ha sido actualizado con exito!',
            'success'
          );
          
            handlerCloseForm();
            navigate('/users');




            
          //hace visible le formulario
          //setVisibleForm(false);
          //reseta el formulario a valores iniciales de initialUserForm()
          //setUserSelected(initialUserForm);
    }


    //el await aqui no es necesario porque no espera recibir solo elimina 
    //con el id 
    const handlerRemoveUser = (id) =>{
        //console.log(id)
        //dispatch llama la action del reducer 
        //pasamos el objeto por parametro con el type 
        //dispatch({  lo pasamos en el mensaje sweetalert line 82
        //    type: 'removeUser',
        //    payload: id,
        //});

        Swal.fire({
            title: "Estas seguro?",
            text: "Cuiadado el usuario sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {
               remove(id);
               dispatch({
                    type: 'removeUser',
                    payload: id,
                }); 

              Swal.fire({
                title: "Usuario eliminado!",
                text: "El Usuario ha sido eliminado con exito!.",
                icon: "success"
            });
            }
          });

    }

    const handlerUserSelectedForm = (user) => {

      //hace vible el formulario
      setVisibleForm(true);
      
        // console.log(user)
        //pasando los datos con ...user un clon 
        //se crea una nueva instancia queda inmutable
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () =>{
          setVisibleForm(true);

    }

    const handlerCloseForm = () => {
          setVisibleForm(false);
          setUserSelected(initialUserForm);
    }



     //regresa un objeto que tiene valores o atributos
      return {

        //atributos o propiedades
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        //funciones que pasamos 
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
      }

    }
