
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from "../actions/userActions";

import "./navbar.css";
function Navbar() {
    const cartState = useSelector(state => state.cartReducers)
    const currentUserState = useSelector(state => state.loginUserReducer)
    const { currentUser } = currentUserState
    const name = currentUser ? currentUser.name : ''
    console.log(cartState)
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 mb-5 navbar-light bg-light">
                <a className="navbar-brand" href="/"> Food.ly </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                       
                          
                                {name ? <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Welcome {name}!
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/orders">Orders</a>
                                    <a className="dropdown-item" href="#" onClick={()=>{
                                        dispatch(LogoutUser())
                                    }}>Logout</a>
                                    
                                </div>
                               
                        </div> : <li className="nav-item active"><a className="nav-link" href="/signin">Login<span className="sr-only">(current)</span></a>
                        </li>}
                        <li className="nav-item active">
                            <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}<span className="sr-only">(current)</span></a>
                        </li>
                        
                        
                    </ul>
                   
                </div>
            </nav>
        </>
    );
}

export default Navbar;
