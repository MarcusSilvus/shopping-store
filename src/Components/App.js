import React, {useState, useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import ProductCard from './ProductCard/ProductCard'
import SearchBar from './SearchBar/SearchBar'

const App = () => {

  const [productState, setProductState] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((productsArray) => {
        const newProductState = productsArray.map((product) => {
          return product
        })
        setProductState(newProductState)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <ProductCard />
    </div>
  )
}

export default App