import React, { useState } from 'react'
import "./food_item.css"
import {useDispatch,useSelector} from 'react-redux'
import {addToCart} from '../actions/cartActions'


function Food_item({ food_single }) {
    const dispatch = useDispatch()
    const handleAddToCart =()=>{
        dispatch(addToCart(food_single,quantity,varient))
    }




    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('medium')
    return (<div className="Food_item shadow-lg p-3 mb-5 bg-white rounded">
        <div>
            <h1>{food_single.name}</h1>
            <img src={food_single.image} className="img-fluid" />
        </div>
        <div className="flex-container">
            <div className="w-100 m-1">
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e) => {
                setVarient(e.currentTarget.value)} }>{food_single.varients.map(varient => {
                    return <option value={varient}>{varient}</option>

                })}</select>

            </div>
            <div className="w-100 m-1">
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.currentTarget.value)}>{[...Array(10).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>
                })}</select>
            </div>
        </div>
        <div className="flex-container">
            <div className="m-2 w-100"> <h1>Price : {quantity * food_single.prices[0][varient]}</h1></div>
            <div className="m-1 w-100"> <button className="btn btn-danger" onClick={handleAddToCart}>Add TO Cart</button></div>
           
        </div>

    </div>
    )
}

export default Food_item
