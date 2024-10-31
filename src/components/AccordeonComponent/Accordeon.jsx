import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='О нас' text='Мы начинающая команда и предлагаем наши товары' />
                <AccordeonItem title='Контакты' text='+79969044505' />
                <AccordeonItem title='Пользователи' text='Мы любим и ценим наших покутателей!' />
            </div>
        </>
    )
}
