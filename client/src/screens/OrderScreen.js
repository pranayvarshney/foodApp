import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useSelector } from 'react-redux'
import SimpleCard from '../components/orderCards'
function OrderScreen() {
    const [orders,setorders] = useState(null)
    const currentUserState = useSelector(state => state.loginUserReducer)
    const { currentUser } = currentUserState
    const email = currentUser.email
    const getAllOrders = async ()=>{
        if(currentUser.length<1){
            window.location.href = '/signin'
        }
        
        try {
            const response = await axios.get(`/api/orders/allorders/${email}`)

            console.log("order response",response)




            setorders(response.data)
            

        } catch (error) {
            console.log(error)
           window.location.href = '/'
        }
    }
    useEffect(() => {
        getAllOrders()
       
        
    }, [])
    
    return (
        <div style ={{ display: 'flex',flexDirection:'column',alignItems: 'center' ,justifyContent : 'center', width : '100%', marginLeft : 'auto'}}>
            
            {orders? orders.reverse().map((order)=>{
              return (
                  <div key={order._id}> <SimpleCard order={order} orderid={order._id} /></div>
                 
                
              )
               
            }) : console.log("notloaded")}
        </div>
    )
}

export default OrderScreen
