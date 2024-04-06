import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({id, username, email}) => {

    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    
//export const UserRow = ( { handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {

    //  quitamos el del UserRow de las props: password
    /*
    la pasamos en el formulario 
    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }
    */

    return (
        <tr>
     
            <td> { id } </td>
            <td> { username } </td>
            <td> { email } </td>
        <td> 
            <button
                 type="button"
                 className="btn btn-secondary btn-sm"
                  onClick = { () => handlerUserSelectedForm({
                    id,
                    username,
                    email
                    //password
                  })}
              >
                Update/Modal
            </button>
        </td>   

        <td>
            <NavLink className={'btn btn-secondary btn-sm'}
                to={'/users/edit/' + id } >
                Update Route
            </NavLink>
            
        </td>


        <td> 
            <button
               type="button"
               className="btn btn-danger btn-sm"
               //onClick = { () => onRemoveUser(id)}
                 onClick = { () => handlerRemoveUser(id)} >
                Remove
            </button>
        </td> 
    </tr>

    )

}