import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"
const initState = {
    loading:false,
    error:false,
    isAuthenticated:false,
    token:"",
    email:"",
    nickName:""
}

 export const loginReducer = (store=initState, {type, payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return {...store, loading:true};
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
                isAuthenticated:true,
                token:payload.token,
                email:payload.email,
                nickName:payload.nickName
            }
        case LOGIN_FAILURE:
            return {
                ...store,
                loading:false,
                error:true,
                isAuthenticated:false,
                token:"",
                email:"",
                nickName:""
            }
        default:
            return store;
    }
}