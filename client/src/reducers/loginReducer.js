
export const loginUserReducer = (state = {currentUser:[]}, action) => {

    switch (action.type) {


        case "USER_LOGIN_REQUEST":
            return { loading: true }
        case "USER_LOGIN_SUCCESS":
            window.location.href = '/'
            return {
                loading: false,
                success: true,
                currentUser : action.payload
            }
        case "USER_LOGIN_FAILED":
            window.location.href = '/signin'
            alert('login failed')
            return {
                loading: false,
                error: action.payload
            }


        default:
            return state
    }
}
