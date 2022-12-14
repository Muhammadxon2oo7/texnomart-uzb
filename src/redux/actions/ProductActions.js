import { ActionType } from "../contants/action-type"



export const setProduct =(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}


export const selectedProduct =(product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}


export const removeSelectedProduct =()=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCT,
    }
}

export function addCartProduct(product) {
    return ({
        type:ActionType.ADD_CART_PRODUCTS,
        payload: product
    })
}