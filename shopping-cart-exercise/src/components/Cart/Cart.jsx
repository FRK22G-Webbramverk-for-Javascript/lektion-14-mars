import './Cart.css';
import { useState } from 'react';

function Cart(props) {
    const [showCart, setShowCart] = useState(false); // Använder detta state för att toggla mellan om varukorgen ska visas eller ej

    const cartItems = props.cart.map((item, index) => {
        return <li key={ index }>{ item }</li>
    });

    return (
        <article className='cart'>
            <a href="#" className='cart__link' 
            onClick={ () => { setShowCart(!showCart) } }>Cart</a> { /* Toggla mellan att visa eller ej varukorgen */}
            { showCart ?
            <section className='cart__items'>
                <h3>Tillagda produkter</h3>
                <ul>
                    { cartItems }
                </ul>
            </section> : '' }
            <p>{ props.cart.length }</p> { /* Längden på arrayen är hur många produkter som ligger i varukorgen */ }
        </article>
    )
}

export default Cart;