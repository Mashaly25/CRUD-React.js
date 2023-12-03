import './App.css'
import ProductCard from './components/ProductCard'
import { productList } from "./data"

function App() {



  return (
    <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
      {productList.map((product) => {return <ProductCard product={product}/>})}
    </div>
  )
}

export default App
