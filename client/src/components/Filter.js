import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFilteredItems } from '../actions/foodActions'
function Filter() {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')


    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 w-100 ">
                    <input type='text' className='form-control' placeholder= 'search for items'
                    value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}}
                    ></input>
                </div>
                <div className="col-md-2">
                    <select name="" id="" className='form-control ' value ={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="Indian">Indian</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Ice-cream">Ice cream</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-info " onClick={()=>{
                        dispatch(getFilteredItems(searchkey,category))
                    }}>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
