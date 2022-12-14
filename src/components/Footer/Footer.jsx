import React from 'react'
import c from './Footer.module.scss'
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom'
import PlaymarketFooter from "../../Assets/img/PlaymarketFooter.svg"
import uzcard from "../../Assets/img/uzcard.png"
import alifNasiya from "../../Assets/img/alifNasiya.png"
import intend from "../../Assets/img/intend.png"
import visa from "../../Assets/img/visa.png"
import payme from "../../Assets/img/payme.png"
const Footer = () => {
  return (
    <div className={c.Footer}>
      <div className={c.container}>
        <div className={c.top__footer}>
          <div className={c.Footer__left}>
            <p className={c.Footer__left__title}>
              Саволингиз борми? Қўнғироқ қилинг
            </p>
            <p className={c.footer__left__phone}>
              +998 88 688 09 06
            </p>
            <div className={c.footer_social__icons}>
              <div className={c.social__icon__wrapper}>
                <a href="https://t.me/Muhammadxon_2oo7/">
                  <FaFacebookF className={c.facebook} />
                </a>

              </div>
              <div className={c.social__icon__wrapper}>
                <a href="https://t.me/Muhammadxon_2oo7/">
                  <FaTelegramPlane className={c.facebook} />
                </a>

              </div>
              <div className={c.social__icon__wrapper}>
                <a href="https://t.me/Muhammadxon_2oo7/">
                  <FaInstagram className={c.facebook} />
                </a>

              </div>
              <div className={c.social__icon__wrapper}>
                <a href="https://t.me/Muhammadxon_2oo7/">
                  <FaYoutube className={c.facebook} />
                </a>

              </div>
            </div>
            <div className={c.playmarket__img__wrpper}>
              <img src={PlaymarketFooter} alt="" />
            </div>
            <a className={c.footer_left_link} href="https://t.me/Muhammadxon_2oo7/">
              Дўконлар манзиллари Наманган вилояти
            </a>
          </div>
          <div className={c.Footer_right}>
            <div className={c.footer_list}>
              <p className={c.footer__list__title}>Компания</p>
              <ul className={c.footer_list_ul}>
                <li><Link to="/" className={c.footer__list_link}>B2B савдоси</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Биз ҳақимизда</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Янгиликлар ва шарҳлар</Link></li>
                <li><Link to="/" className={c.footer__list_link}>IMEI ни текшириш</Link></li>
              </ul>
            </div>
            <div className={c.footer_list}>
              <p className={c.footer__list__title}>Маълумот</p>
              <ul className={c.footer_list_ul}>
                <li><Link to="/" className={c.footer__list_link}>Бепул етказиб бериш</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Бонус тизими</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Техномартда ишлаш</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Шахсий кабинет</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Aлоқа рақамлари</Link></li>
              </ul>
            </div>
            <div className={c.footer_list}>
              <p className={c.footer__list__title}>Ҳаридорга ёрдам</p>
              <ul className={c.footer_list_ul}>
                <li><Link to="/" className={c.footer__list_link}>Муддатли тўловга сотиб олиш</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Махсулотни қайтариш</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Маҳсулотлар учун кафолат</Link></li>
                <li><Link to="/" className={c.footer__list_link}>Кўп сўраладиган саволлар</Link></li>
              </ul>
              <div className={c.footer__telegram__bot}>
                <a href="https://t.me/Muhammadxon_2oo7/">
                  <FaTelegramPlane className={c.footer_telegram} />Бонусингизни билиб олинг
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={c.bottom__footer}>
          <div className={c.bottom__footer__left__text}>
            <p>
              2016-2022 © texnomart.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг кўрсатилган қиймати ва <br /> уларни сотиб олиш шартлари жорий санага амал қилади
            </p>
          </div>
          <div className={c.bottom__footer__right__imgs}>
            <ul>
              <li><img src={uzcard} alt="" /></li>
              <li><img src={alifNasiya} alt="" /></li>
              <li><img src={intend} alt="" /></li>
              <li><img src={visa} alt="" /></li>
              <li><img src={payme} alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer