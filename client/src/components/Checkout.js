import React from 'react'
import { useDispatch } from 'react-redux'
import StripeCheckout  from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
function Checkout({subTotal}) {
    const dispatch = useDispatch()
     function tokenHandler(token){
        dispatch(placeOrder(token,subTotal))
     }
    return (
        <div>
            <StripeCheckout
            amount={subTotal*100}
            shippingAddress
            currency='inr'
            token = {tokenHandler}
                stripeKey='pk_test_51JPmNKSJXwq2v5LTNJwlxPOzzyp0s8RpjReYJFmG5YprQkqAvbQqrX6vbihHqMhp8nceKYw2vATlnpQQwVUQxYPs00lAd4isCU'
            > 
                <button className='btn btn-primary' >Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
