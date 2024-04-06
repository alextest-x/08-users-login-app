export const usersReducer = (state=[], action) => {

switch (action.type) {

    case 'addUser': 

    return [
        ...state, //lista de usuarios
        {
            ...action.payload,
            //se comenta porque el id lo trae el backend
           //id: new Date().getTime(), //forma el id con la fecha 
        }
    ];

    case 'removeUser':
        //filter filtar todos los usuarios menos el id que recibe
        //hace un arreglo nuevo menos con el usuario que tiene el id
        return state.filter( user => user.id !== action.payload);

    case 'updateUser':

    //el map regresa una nueva instancia del arreglo como lo cambios es inmutable
        return state.map(u => {

            if(u.id === action.payload.id) {
                    return { 
                        //...action.payload modifica todo pero menos el password porque lo pusimos password: u.password
                        ...action.payload,
                        //pasamos el password que tenia 
                        password: u.password
                   };
            }
             return u;
        })
        //regresa un arreglo de objetos de usaurios que esta en action.payload
        case 'loadingUsers':
            return action.payload;
 
    default:
        //sin estado no se hace cambios
        return state;
  }
}