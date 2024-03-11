/* eslint-disable react/prop-types */
import clsx from 'clsx'
import styles from '../index.module.scss'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

export default function HeaderServicesModal({ isServiceModal, setIsServiceModal }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div
      onMouseOver={() => setIsServiceModal(true)}
      onMouseOut={() => setIsServiceModal(false)}
      className={clsx(styles.service_menu, {
        [styles.actives]: isServiceModal,
      })}
    >
      <div className={`container ${styles.service_container}`}>
        <div className={styles.restart}>
          <div className={styles.left}>
            {activeTabButtons.map((item) => (
              <button
                className={clsx({
                  [styles.tab__active]: activeTab === item.id,
                })}
                onClick={() => setActiveTab(item.id)}
                key={item.id}
              >
                {item.title}
                <IoIosArrowForward />
              </button>
            ))}
          </div>
          <ul className={clsx(`${styles.services_tab_content} ${styles.right}`)}>
            {servicesTabContent[activeTab].items.map((item, idx) => (
              <li data-aos={'fade-up'} data-aos-duration={idx + 1 * 500} key={idx}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_22_4532)">
                    <path
                      d="M22.8892 5.1393C22.4169 3.10258 21.0404 1.61014 18.9045 0.819223C17.4817 0.293727 14.0165 -0.187073 12.491 1.60609C7.57286 -1.30818 4.97953 0.279315 3.23559 2.15248C-0.613594 6.28713 1.14752 10.4524 2.79332 12.2608C3.98311 13.5704 4.32723 14.3276 4.51994 15.1925C4.56334 15.3828 4.66148 15.9449 4.66634 16.0652C4.97046 23.2677 7.4263 23.8848 8.0135 23.9282C8.18467 23.9776 8.35325 24.0001 8.51632 24.0001C8.81559 24.0001 9.09915 23.9203 9.35647 23.7626C10.5762 23.0151 10.9521 20.688 11.2824 18.6388C11.4026 17.8973 11.5147 17.1972 11.6457 16.7899C11.8729 16.0848 12.0607 15.924 12.0589 15.8996C12.2227 15.9724 12.4988 16.5 12.5292 16.708C12.5746 17.0186 12.6071 17.4208 12.6436 17.8717C12.8319 20.185 13.1129 23.6737 15.5732 23.9263C15.7478 23.9637 16.163 24.0022 16.6728 23.6946C17.8325 22.9904 18.6912 20.9738 19.2227 17.7L19.3026 17.1765C19.494 15.8641 19.7591 14.0654 20.843 12.9255C22.0954 11.6179 23.607 8.23608 22.8892 5.1393ZM20.1163 12.2311C18.8108 13.6039 18.507 15.6667 18.3079 17.0333L18.231 17.5402C17.6185 21.3061 16.7075 22.4429 16.2204 22.7862C15.9629 22.9676 15.8022 22.942 15.8199 22.949L15.7055 22.9261C14.0568 22.7822 13.8142 19.7816 13.6546 17.7926C13.615 17.3154 13.5805 16.8905 13.5333 16.5621C13.4848 16.2306 13.0155 14.9665 12.1527 14.8946C11.225 14.8324 10.822 16.069 10.6899 16.4811C10.5351 16.9634 10.4212 17.6644 10.2901 18.479C10.0376 20.0389 9.65704 22.3976 8.83162 22.9044C8.72053 22.9736 8.55406 23.0444 8.2543 22.9478L8.10192 22.9242H8.08864C8.06354 22.9242 5.95927 22.6698 5.67814 16.0236C5.66826 15.7919 5.54616 15.1381 5.50956 14.9725C5.2443 13.7874 4.71233 12.8682 3.54473 11.5844C3.15381 11.1563 -0.14364 7.27172 3.97922 2.84412C5.87344 0.809506 8.66839 -0.568118 15.0153 4.64425C15.2314 4.82028 15.5478 4.79064 15.7264 4.57461C15.9039 4.35875 15.8723 4.04264 15.6573 3.8637C14.8439 3.19764 14.0806 2.63117 13.3647 2.15717C14.5342 0.982782 17.2943 1.30229 18.5573 1.77062C20.3866 2.44704 21.5137 3.65738 21.909 5.37039C22.5116 7.98248 21.2562 11.0351 20.1163 12.2311Z"
                      fill="#2CB2BB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_4532">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h5>{item.text}</h5>
                {item.action && (
                  <>
                    <svg
                      className={styles.actions_avg}
                      width="59"
                      height="56"
                      viewBox="0 0 59 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="59" cy="29" r="59" fill="#F3C05D" />
                    </svg>
                    <span className={styles.action}>Акция</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.images}></div>
      </div>
    </div>
  )
}

const activeTabButtons = [
  {
    id: 0,
    title: 'Восстановить зуб',
  },
  {
    id: 1,
    title: 'Восстановить все зубы',
  },
  {
    id: 2,
    title: 'Вылечить зубы',
  },
  {
    id: 3,
    title: 'Красивая улыбка',
  },
]

const servicesTabContent = [
  {
    id: 0,
    items: [
      {
        text: 'Имплантация зубов',
        action: false,
      },
      {
        text: 'Коронка на зуб',
        action: true,
      },
      {
        text: 'Мост из коронок',
        action: false,
      },
      {
        text: 'Съёмное протез-ие зубов',
        action: false,
      },
      {
        text: 'Виниры',
        action: false,
      },
      {
        text: 'Худож. реставрация зубов',
        action: false,
      },
      {
        text: 'Имплантация зубов',
        action: false,
      },
      {
        text: 'Коронка на зуб',
        action: true,
      },
    ],
  },
  {
    id: 1,
    items: [
      {
        text: 'Все зубы за 1 день All-on-4',
        action: false,
      },
      {
        text: 'Имплантация All-on-6',
        action: false,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        text: 'Лечение зубов',
        action: false,
      },
      {
        text: 'Лечение кариеса',
        action: false,
      },
      {
        text: 'Лечение пульпита',
        action: false,
      },
      {
        text: 'Лечение периодонтита',
        action: false,
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        text: 'Pro чистка зубов',
        action: false,
      },
      {
        text: 'Отбеливание зубов',
        action: false,
      },
      {
        text: 'Отбеливание Zoom',
        action: false,
      },
      {
        text: 'Худож. реставрация зубов',
        action: false,
      },
      {
        text: 'Виниры',
        action: false,
      },
      {
        text: 'Брекеты',
        action: false,
      },
      {
        text: 'Скайсы',
        action: false,
      },
    ],
  },
]
