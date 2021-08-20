export const getAllFoodReducers =( state={food:{}} ,action)=>{
    switch ( action.type){
        case 'GET_ITEMS_REQUEST' :
            return{loading :true,
                ...state}
            
        case 'GET_ITEMS_SUCCESS':
            return {loading:false,
                food : action.payload}
        case 'GET_ITEMS_FAILED':
            return { loading: false,food: action.payload}
        default : return state
    }
}