export const addToCart = (food_single,quantity,varient)=> (dispatch,getState )=>{
   
    var cartItem = {
        name : food_single.name,
        _id : food_single._id,
        image: food_single.image,
        varient : varient,
        prices: food_single.prices,
        quantity:Number(quantity),
        price : food_single.prices[0][varient]*quantity
    }
    

    if(cartItem.quantity>10 ){
        alert('Quantity must be b/w 1-10')
    }
    else{
        if (cartItem.quantity < 1) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: food_single
            })}
        else{
            dispatch({
                type: "ADD_TO_CART",
                payload: cartItem
            })
        }
        
    }


    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}


export const removeFromCart = (food_single) => (dispatch,getState) => {

    
    dispatch({
        type: "REMOVE_FROM_CART",
        payload:food_single
    })

    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}