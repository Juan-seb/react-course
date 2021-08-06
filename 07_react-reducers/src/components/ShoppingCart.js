import { useReducer } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInititalState, shoppingReducer } from "../reducers/shoppingReducer"
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInititalState);
    const { products, cart } = state;

    /*Add the product to cart */
    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }

    /*Delete the product to cart, this function also allow delete all products for a same item of cart */
    const delFromCart = (id, all = false) => {

        all ? dispatch({
            type: TYPES.REMOVE_ALL_FROM_CART, payload: id
        }) : dispatch({
            type: TYPES.REMOVE_ONE_FROM_CART, payload: id
        })
    }

    /*Delete all products to the cart */
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }

    return (


        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className='box grid-responsive'>
                {products.map((product) => (
                    <ProductItem key={product.id} data={product} addToCart={addToCart} />
                ))}
            </article>
            <h3>Carrito</h3>
            <article className='box'>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartItem key={index}
                            data={item}
                            delFromCart={delFromCart}
                        />
                    ))
                ) : (<h4>El carrito no tiene productos</h4>)

                }
                <button onClick={clearCart}>Limpiar carrito</button>
            </article>
        </div>
    )
}

export default ShoppingCart
