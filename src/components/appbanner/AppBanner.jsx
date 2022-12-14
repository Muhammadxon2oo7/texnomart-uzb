import React from 'react'
import c from "./AppBanner.module.scss"
import Appimg from "../../Assets/img/AppBanner.png"
import QR from "../../Assets/img/App_qr.png"
import Playmarket from "../../Assets/img/playmarket.png"
const AppBanner = () => {
  return (
    <div className={c.AppBanner}>
      <div className={c.AppBanner__img__wrapper}>
        <img src={Appimg} alt="" />
      </div>
      <div className={c.App__text__content}>
        <p className={c.App__title}>
          Иловани юкланг
        </p>
        <p className={c.App_dec}>
          Ҳаридларни уйдан чиқмаган ҳолда мобил илова орқали амалга оширинг!
        </p>
        <div className={c.App_qr}>
          <img src={QR} alt="" className={c.Aqq_qr_img} />
          <p className={c.qr__dec}>
            Камерани йўналтиринг ва Texnomart иловасини бепул юкланг
          </p>
        </div>
        <a href="https://t.me/Muhammadxon_2oo7/">
          <img src={Playmarket} alt="" />
        </a>
      </div>
    </div>
  )
}

export default AppBanner