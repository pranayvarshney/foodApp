import axios from "axios"
const { v4: uuidv4 } = require('uuid')
export const placeOrder=(subTotal, cartItems)=> async (dispatch,getState)=>{
    dispatch({type : "PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser
    const name = currentUser.name
    const email = currentUser.email
    const userId= currentUser._id
    const transcationID= uuidv4()
    try {
        console.log('here')
        const response = await axios.post('/api/orders/neworder',{name,email,userId,cartItems,subTotal,transcationID})
        
        dispatch({ type:"PLACE_ORDER_SUCCESS"})
        
        console.log(response);
        
    }   
    catch (error){
        dispatch({type:"PLACE_ORDER_FAILED"})
        console.log(error);
    }
}