export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signupLoading=()=>({
    type:SIGNUP_LOADING,
});

export const signupSuccess = (payload)=>({
    type:SIGNUP_SUCCESS,
    payload
});

export const signupFailure = ()=>({
    type:SIGNUP_FAILURE,
})

export const signup = ({nickName,email, password,country})=>(dispatch)=>{
    dispatch(signupLoading())
        fetch(`https://show-art.herokuapp.com/register`,{
          method:"post",
          body:JSON.stringify({
              "nickName":nickName,
              "email":email,
              "password":password,
              "country":country,
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(signupSuccess({token:res.token})))
        .catch(error=>dispatch(signupFailure()))
}