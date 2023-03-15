import './Header.css';

import Cart from "../Cart/Cart";

function Header(props) {
    return (
        <header>
            <Cart cart={ props.cart } /> { /* Skickar vidare cart till Cart */}
        </header>
    )
}

export default Header;