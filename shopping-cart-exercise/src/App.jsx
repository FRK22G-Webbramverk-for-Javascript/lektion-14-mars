import './App.css'
import { useState } from 'react'

import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {
  const[products, setProducts] = useState([
    { id: 1, title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 2, title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 3, title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 4, title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
  ]);
  const [cart, setCart] = useState([]) // Vår varukorgen där vi kan spara produkter när man trycker på "lägg till i varukorgen"

  const productComponents = products.map((product) => {
    return <Product title={ product.title } author={ product.author } 
    text={ product.text } key={ product.id } addToCart={ addToCart } />
  });

  function addToCart(productTitle) { // Funktion som lägger till en produkt i vår varukorgen
    const tempCart = [...cart];
    tempCart.push(productTitle); // Här kan man välja vad man vill spara, jag sparar bara titeln i detta exemplet

    setCart(tempCart);
  }

  console.log(productComponents);
  return (
    <div className="App">
      <Header cart={ cart } /> { /* Skickar vidare cart till Header */}
      <section className='products'>
        { productComponents }
      </section>
    </div>
  )
}

export default App
