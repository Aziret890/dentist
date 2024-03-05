import React from 'react'
import styles from '../index.module.css'
import DropDown from '../../../features/DropDown'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const HeaderBottomSlice = () => {
  const patientsConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        Пациенты
        <IoIosArrowDown />
      </>
    ),
  }
  const workExampleConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        Пример работы
        <IoIosArrowDown />
      </>
    ),
  }
  const feedbackConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        Отзыва
        <IoIosArrowDown />
      </>
    ),
  }
  const priceConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        Цена
        <IoIosArrowDown />
      </>
    ),
  }
  const commuterConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        Для иногородних
        <IoIosArrowDown />
      </>
    ),
  }
  const aboutClientConfig = {
    links: ['Рекомендация перед приемом', 'Рекомендация после лечение', 'Гарантии'],
    initialSelectedItem: (
      <>
        О клинике
        <IoIosArrowDown />
      </>
    ),
  }

  return (
    <div className={styles['bottom-slice']}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.h1}>Услуги</h1>
        <DropDown {...workExampleConfig} />
        <Link className={styles.a} to={'#'}>
          Врач
        </Link>
        <DropDown {...priceConfig} />
        <DropDown {...feedbackConfig} />
        <DropDown {...patientsConfig} />
        <DropDown {...commuterConfig} />
        <DropDown {...aboutClientConfig} />
        <Link className={styles.a} to={'#'}>
          Контакты
        </Link>
      </div>
    </div>
  )
}

export default HeaderBottomSlice
