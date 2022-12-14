import React from 'react'
import c from "./Installment.module.scss"
import Installment_img_one from "../../Assets/img/Installment__table__card__img__circle__img__one.svg"
import Installment_img_two from "../../Assets/img/Installment__table__card__img__circle__img__two.svg"
import Installment_img_three from "../../Assets/img/Installment__table__card__img__circle__img__three.svg"
import Installment_img_four from "../../Assets/img/Installment__table__card__img__circle__img__four.svg"
import Installment_img_five from "../../Assets/img/Installment__table__card__img__circle__img__five.svg"
const Installment = () => {
    return (
        <div className={c.Installment}>
            <div className={c.Installment__title}>
                <p>Телефонлар ва маиший техника муддатли тўловга</p>
            </div>
            <div className={c.Installment__table}>
                <div className={c.Installment__table__card}>
                    <div className={c.Installment__table__card__img__wrapper}>
                        <div className={c.Installment__table__card__img__circle}>
                            <img src={Installment_img_one} alt="" />
                        </div>
                    </div>
                    <p className={c.Installment__table__card__title}>
                        Муддатли тўловга сотиб олиш
                    </p>
                    <p className={c.Installment__table__card__dec}>
                        Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
                    </p>
                </div>
                <div className={c.Installment__table__card}>
                    <div className={c.Installment__table__card__img__wrapper}>
                        <div className={c.Installment__table__card__img__circle}>
                            <img src={Installment_img_two} alt="" />
                        </div>
                    </div>
                    <p className={c.Installment__table__card__title}>
                        Муддатли тўловга сотиб олиш
                    </p>
                    <p className={c.Installment__table__card__dec}>
                        Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
                    </p>
                </div>
                <div className={c.Installment__table__card}>
                    <div className={c.Installment__table__card__img__wrapper}>
                        <div className={c.Installment__table__card__img__circle}>
                            <img src={Installment_img_three} alt="" />
                        </div>
                    </div>
                    <p className={c.Installment__table__card__title}>
                        Муддатли тўловга сотиб олиш
                    </p>
                    <p className={c.Installment__table__card__dec}>
                        Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
                    </p>
                </div>
                <div className={c.Installment__table__card}>
                    <div className={c.Installment__table__card__img__wrapper}>
                        <div className={c.Installment__table__card__img__circle}>
                            <img src={Installment_img_four} alt="" />
                        </div>
                    </div>
                    <p className={c.Installment__table__card__title}>
                        Муддатли тўловга сотиб олиш
                    </p>
                    <p className={c.Installment__table__card__dec}>
                        Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
                    </p>
                </div>
                <div className={c.Installment__table__card}>
                    <div className={c.Installment__table__card__img__wrapper}>
                        <div className={c.Installment__table__card__img__circle}>
                            <img src={Installment_img_five} alt="" />
                        </div>
                    </div>
                    <p className={c.Installment__table__card__title}>
                        Муддатли тўловга сотиб олиш
                    </p>
                    <p className={c.Installment__table__card__dec}>
                        Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Installment