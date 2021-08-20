import axios from 'axios'




export const registerUser=(user)=> async dispatch=>{
    dispatch({ type: "USER_REGISTER_REQUEST"})
    try {
       const response = await axios.post('/api/user/register',user)
    //    console.log(response);
        dispatch({ type: "USER_REGISTER_SUCCESS" })
    } catch (error) {
       
        dispatch({ type: "USER_REGISTER_FAILED"  , payload :error})
    }
}
export const LoginUser = (user) => async dispatch => {
   
    dispatch({ type: "USER_LOGIN_REQUEST" })
    try {
        const response = await axios.post('/api/user/login', user)
        console.log(response);
        dispatch({ type: "USER_LOGIN_SUCCESS",payload : response.data })
        localStorage.setItem('currentUser',JSON.stringify(response.data));
        
    } catch (error) {

        dispatch({ type: "USER_LOGIN_FAILED", payload: error })
    }
}

export const LogoutUser = () =>  dispatch => {
    localStorage.removeItem("currentUser")
    window.location.href='/signin'
}