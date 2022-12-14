import React from 'react'
import { CgClose } from "react-icons/cg"
import c from "./Savatcha.module.scss"
import { SlBasket } from "react-icons/sl"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md"
const Savatcha = (props) => {
  const dispatch = useDispatch()
  const allAddedProducts = useSelector(state => state)
  const GetProducts = allAddedProducts
  const [showProducts, setShowProducts] = useState(false)
  const handleNoProduct = () => {
    GetProducts.card.card.length > 0 ?
      setShowProducts(true)
      : setShowProducts(false)
  }


  let priceget = 0
  return (
    <div className={c.modal__wrapper} onMouseLeave={handleNoProduct} onMouseEnter={handleNoProduct}>
      <div className={c.modal__bg} onClick={props.modalClose}></div>
      <div className={c.modal__card}>
        <div onClick={props.modalClose} className={c.closeBtn__wrapper}>
          <CgClose />
        </div>
        <div className={c.modal__title__wrapper}>
          <p>
            Ҳозир харид қилиш
          </p>
        </div>

        {
          showProducts ? <div className={c.savatcha__wrapper}>{GetProducts.card.card.map(cart => {
            { priceget += cart.price }
            return (
              <div className={c.savatcha__item}>

                <div className={c.savatcha__item_dec__wrapper} key={cart.id}>
                  <img className={c.savatcha__item__img} src={cart.images[0]} alt="" />
                  <p><span className={c.savatcha__item__dec__p__name}>{cart.title}</span> <br /><span className={c.savatcha__item__dec__p__price}>{cart.price} $</span></p>
                </div>
                <div className={c.control__btns}>
                  <button value={cart.id} className={`${c.learnmore} ${c.item__remove}`} >
                    <span className={c.circle} aria-hidden="true">
                      <MdRemoveShoppingCart className={c.circle__remove__icon} />
                    </span>
                    <span id={cart.id} className={c.buttontext} onClick={(e) => {
                      let a = Number(e.target.id)


                      dispatch({
                        type: "DELETE_ITEM",
                        payload: a,


                      })
                    }
                    }>remove</span>
                  </button>

                  <button className={`${c.learnmore} ${c.item__add}`} onClick={(e) => {

                    dispatch({
                      type: "ADD_TO_CART",
                      payload: cart

                    })

                  }}>
                    <span className={c.circle} aria-hidden="true">
                      <MdAddShoppingCart className={c.circle__add__icon} />
                    </span>
                    <span className={c.buttontext}>Add</span>
                  </button>
                </div>

              </div>
            )
          }
          )}
            <div className={c.trapdoor}>
              <div className={`${c.top} ${c.door}`}>
              </div>
              <div className={`${c.bottom} ${c.door}`}>
              </div>
              <p className={c.twitterfollowbutton} data-show-count="false" data-size="large" data-dnt="false">
                {priceget}$
              </p>

            </div>
          </div> :
            <div className={c.no__product}>
              <SlBasket className={c.no__product__icon} />
              <p className={c.no__product__text}>
                Саватчада хозирда <br />
                ҳеч нима йўқ
              </p>
              <button onClick={props.modalClose} className={c.go__shopping}>Харид қилиш</button>

            </div>
        }

      </div>
    </div>
  )
}

export default Savatcha



