import { TYPES } from "../actions/shoppingActions";

export const shoppingInititalState = {
    products: [
        { id: 1, name: 'Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', price: 300 },
        { id: 4, name: 'Producto 4', price: 400 },
        { id: 5, name: 'Producto 5', price: 500 },
        { id: 6, name: 'Producto 6', price: 600 },
    ],
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            /*Find the product that have the same id*/
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? {
                // Modify the quantity property of the products in the cart
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item)
            } : {
                /*Add the product in the state if the product is add first time*/
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }]
            }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

            // Find the item to delete in the cart 
            let itemToDelete = state.cart.find(product => product.id === action.payload);
            
            // Verify if the quantity is greater than 1
            return (itemToDelete.quantity > 1) ? {
                    // If the quantity is greater than 1 generate a new array that modify the quantity that the product
                    ...state,
                    cart: state.cart.map(product => product.id === action.payload ? {
                        ...product,
                        quantity: product.quantity - 1
                    }:product)
            }:{
                // If not greater than 1 delete the product of the cart
                ...state,
                cart: state.cart.filter(el => el.id !== action.payload)
            }
            
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            
            return {
                ...state,
                cart: state.cart.filter(el => el.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: // Delete all products of the cart
            return shoppingInititalState;
        default:
            return state;
    }
}