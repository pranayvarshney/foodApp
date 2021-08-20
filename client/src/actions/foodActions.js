const axios =require('axios')

export const getAllItems=()=>  async dispatch =>{
    
    dispatch({ type : 'GET_ITEMS_REQUEST'})
    try {
        const response = await axios.get('/api/food/getitems')
        // console.log(response);
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({ type: 'GET_ITEMS_FAILED' , payload : error})
    }
}
export const getFilteredItems= (searchkey,category) => async dispatch => {
    var filteredItems;
    dispatch({ type: 'GET_ITEMS_REQUEST' })
    try {
        const response = await axios.get('/api/food/getitems')
        // filteredItems = response.data.filter((item) => { item.name.includes(searchkey)})
        const respdata = response.data
        
        if(category !=='all'){
            filteredItems = respdata.filter(doc => doc.category == category && doc.name.toLowerCase().includes(searchkey))
            dispatch({ type: 'GET_ITEMS_SUCCESS', payload: filteredItems })
        }
        else{
            filteredItems = respdata.filter(doc => doc.name.toLowerCase().includes(searchkey))
            dispatch({ type: 'GET_ITEMS_SUCCESS', payload: filteredItems })
        }
    } catch (error) {
        dispatch({ type: 'GET_ITEMS_FAILED', payload: error })
    }
}
