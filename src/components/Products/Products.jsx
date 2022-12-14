import React from 'react'
import ProductOne from './ProductOne'
import c from "./Products.module.scss"
const Products = () => {
  return (
    <div className={c.Products}>
      <ProductOne />
    </div>
  )
}
export default Products


