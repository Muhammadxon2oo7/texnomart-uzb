import { ActionType } from "../contants/action-type"

const initialState ={
    product:[],
    card:[],
    // price:[]
}
export const cardReducer =(state =initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            // console.log('================a====================');
            // console.log(action.payload);
            // console.log('====================================');
            return{
                card:[...state.card,action.payload],
                // price:[...state.price,action.payload.price]
            }

        case "DELETE_ITEM":
            const id = state.card.findIndex((e) => e.id === action.payload)
            state.card.splice(id, 1);

            return {
              card: [...state.card],
            } 
        default:
            return state
            
    }
}
export const productReducer =(state =initialState,{type,payload})=>{
    switch (type){
        
        case ActionType.SET_PRODUCTS:
            return {...state,product:payload}
            
        
        default:
            return state
    }
}


export const selectedProductReducer =(state =initialState,{type,payload})=>{
    switch (type){
        case ActionType.SELECTED_PRODUCT:
            return {...state,...payload}

        case ActionType.REMOVE_SELECTED_PRODUCT:
            return{}
        default:
            return state
     }
}

export const addProductReducer =(state =initialState,{type,payload})=>{
    switch (type){
        case ActionType.ADD_CART_PRODUCTS:
            return {
                ...state,
                product: []
            }
        default:
            return state
     }
}

