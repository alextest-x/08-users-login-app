
//8. hacemos el reducer y lo implementamos en el UsersApp
//state es un objeto
export const loginReducer = ( state = {}, action) => {

    switch (action.type) {
      case 'login':
        
        //retorna un objeto los datos del usaurio  action.payload
        return {
            isAuth: true,
            user: action.payload,
        };

      case 'logout':
        return{
            isAuth:false,
        };

      default:
        return state;
    }

}