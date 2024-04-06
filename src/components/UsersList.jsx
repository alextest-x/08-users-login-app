import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserRow } from "./UserRow";

//export const UsersList = ( {handlerUserSelectedForm, handlerRemoveUser,  users=[] })=> {
export const UsersList = () => {
    const { users } = useContext(UserContext);

    //const countUser= users.length ;
    return (

       
    <table className="table table-hover table-striped"> 
              
        <thead> 
            <tr>
                <th> id </th>
                <th> username </th>
                <th> email  </th>
                <th> update </th>
                <th> update route  </th>
                <th> remove </th>
            </tr>
        
        </thead>

        <tbody>
                {

                  
                      users.map(( {id, username, email /*password */ }) => (    

                    <UserRow 
                        key={id} 
                        id={id}
                        username={username}
                        email={email} />
                        /*password={password}*/
                        //handlerRemoveUser={ handlerRemoveUser }
                        //handlerUserSelectedForm = { handlerUserSelectedForm }  />
                      
                    
                    ))
                }
        </tbody>

    </table>

    )
}