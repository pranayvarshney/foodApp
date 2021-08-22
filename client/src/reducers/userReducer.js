

export const registerUserReducer=(state = {}, action) => {
    switch (action.type) {

       
        case "USER_REGISTER_REQUEST":
            return { loading :true  }
        case "USER_REGISTER_SUCCESS":
            alert("Successfull registered user!")
            return { loading : false,
                     success : true}
        case "USER_REGISTER_FAILED":
            alert(`failed resgistering user`)
            return {
                loading: false,
                error : action.payload
            }


    default:
        return state
    }
}
