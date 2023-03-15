import './Product.css';

function Product(props) {
    console.log(props);

    return (
        <article className='product'>
            <h2>{ props.title }</h2>
            <h3>{ props.author }</h3>
            <p>{ props.text }</p>
            <button onClick={ () => { props.addToCart(props.title) } }>Add to cart</button>
        </article>
    )
}

export default Product;