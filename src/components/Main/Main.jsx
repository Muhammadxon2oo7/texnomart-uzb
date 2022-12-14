import React from 'react'
import AppBanner from '../appbanner/AppBanner'
import Installment from '../installment/Installment'
import Littleswiperone from '../little__swiper__one/Little__swiper__one'
import Littleswipertwo from '../little__swiper__two/Little__swiper__two'
import Products from '../Products/Products'
import c from "./Main.module.scss"
const Main = () => {
  return (
    <div className={c.Main}>
      <Littleswiperone />
      <Littleswipertwo />
      <Products />
      <AppBanner />
      <Installment />
    </div>
  )
}

export default Main