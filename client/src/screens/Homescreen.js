import React, {useEffect } from 'react'
import Food_item from '../components/Food_item'

// import food from "../pizzadata"
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../actions/foodActions'
import Loading from '../components/Loading'
import Filter from '../components/Filter'


function Homescreen() {
    const dispatch = useDispatch()

    const foodstate = useSelector(state => state.getAllFoodReducers)
    // console.log(foodstate)
    const { food, error, loading } = foodstate
    // console.log(food)
   
    useEffect(() => {
        dispatch(getAllItems())
    }, [])
    //    const loading =false
    //    const error =false


    return (
        <div>
            <Filter/>
            <div className="row justify-content-center align-items-center">
               
                {loading ? <Loading/> : error ? (<h1>Something went wrong</h1>) :
                    food.length >= 1 ? food.map(food_single => {
                        return <div className="col-md-4 p-5" key={food_single._id}>
                            <Food_item food_single={food_single} />

                        </div>
                    }) : (<h1>No Items Found</h1>)


                }


            </div>
        </div>
    )
}

export default Homescreen
