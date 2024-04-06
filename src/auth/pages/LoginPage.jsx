import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";


  //2. pasamos el initialLoginForm al estado useState
  const initialLoginForm = {
    username: '',
    password: '',
  }

 //export const LoginPage = ({ handlerLogin }) => {
  export const LoginPage = () => {

   const { handlerLogin } = useContext(AuthContext);

    //1.
      const [loginForm, setLoginForm]= useState(initialLoginForm);

    //3. desestructuramos
      const { username, password} = loginForm;

    //4. ponemos los values en el formulario value = {username}
  

    //5. onchange ponemos en el formulario 
    //6. hacemos la funcion onInputchange
    //le ponemos el target como parametro para desestructurar const {name, value}= target;     // pero le pasa el event
    // y ponemos como con el operador spred todo lo que tenga el objeto loginForm
    //y con [name]: value, el valor del campo que esta escribiendo con la unidad computada
         const onInputchange = ({ target }) => {
           const {name, value} = target;
           setLoginForm({
                ...loginForm, 
            [ name ]: value, 
           })
        }


        

      //7. ponemos onSubmit en el form y hacemos la funcion
      //event.preventDefault(); refresca una sola vez
      const onSubmit = (event) => {
      event.preventDefault(); 
      if(!username || !password ){
        Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
      }

     
       //if(!username || !password ){
      
     
      handlerLogin({username, password});
      setLoginForm(initialLoginForm);
  //}

}

  return (

    //hay que poner para que muestre el login 
    //en className="modal" style={{ display: "block"}} tabIndex="-1"
    //style={{ display: "block"}}

<div className="modal" style={{ display: 'block'}} tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Login Page</h5>
      </div>

        <form onSubmit = { onSubmit }>

          <div className="modal-body">
       
            <input 
            className="form-control my-4 e-80" 
            placeholder="Username"
            name="username"
            value = {username} //4.
            onChange={ onInputchange } //5.
            />

            <input 
            className="form-control my-4 e-80" 
            placeholder="Password"
            type="password"
            name="password"
            value = {password} //4.
            onChange={ onInputchange } //5.
            />


          </div>


        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
       </div>
       </form>

     </div>
   </div>
 </div>
  );
 }