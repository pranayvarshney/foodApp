import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from '../actions/orderActions'
import { addToCart, removeFromCart } from '../actions/cartActions'

function Cartscreen() {
    const cartstate = useSelector((state) => state.cartReducers);
    const cartItems = cartstate.cartItems;
    var subTotal = cartItems.reduce((x,item)=> x+item.price ,0 )
    const dispatch = useDispatch()
    const currentUserState = useSelector(state => state.loginUserReducer)
    const {currentUser}= currentUserState
    function handleClick() {
        
        var subTotal = cartItems.reduce((x, item) => x + item.price, 0)
        dispatch(placeOrder(subTotal, cartItems))
        
        localStorage.removeItem("cartItems")
    }


    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>My cart</h2>
                    {cartItems.map((item) => {
                        return <div className="flex-container border-bottom m-3">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name} [{item.varient}]</h1>
                                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = ₹{item.price}</h1>
                                <h1 style={{ display: "inline" }}>Quantity: </h1>
                                <i className="fa fa-plus" onClick={() => { dispatch(addToCart(item, ++item.quantity, item.varient)) }}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" onClick={() => { dispatch(addToCart(item, --item.quantity, item.varient)) }}></i>
                            </div>

                            <div className="m-1 w-100">
                                <img src={item.image} style={{ height: '80px', width: '80px' }} />
                            </div>
                            <div className="m-1 w-100 mt-5">
                                <i className="fa fa-trash" onClick={() => { dispatch(removeFromCart(item)) }}></i>
                            </div>

                        </div>

                    })}

                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{fontSize:'45px'}}> SubTotal {subTotal} /-</h2>
                    <button className="btn btn-danger" onClick = {
                        ()=>{
                        if(currentUser){
                            handleClick()
                        }
                        else{
                            window.alert('not logged in!')
                            
                        }
                       
                        
                        
                        }
                    }> <a href="/orders"  className='nav-link' style={{textDecoration:"none"}}>  Check Out</a>  </button>
                </div>
            </div>
        </div>
    );
}

export default Cartscreen;
