/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  hidden: {
    opacity: 0,
    translateX: 50,
  },
  visible: { opacity: 1, translateX: 0 },
}
export default function DocCard({ idx, item, styles }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: idx * 0.2,
        ease: 'easeInOut',
        duration: 0.25,
      }}
      viewport={{ amount: 0 }}
      key={item.id}
      className={styles.card}
    >
      <div className={styles.start}>
        <div className={styles['card-image']}>
          <img width={200} src={'https://akmatovt.pythonanywhere.com/media/' + item.image1_png} alt={item.name} />
        </div>
        <div className={styles['card-content']}>
          <h1>
            {item.experience}{' '}
            <span>
              Лет <br /> опыта
            </span>
          </h1>
          <Link
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            to={`/doctors/${item.id}`}
          >
            <h4>
              {item.firstName} {item.lastName}
            </h4>
          </Link>
          <ul>
            {item?.spec?.map((item, idx) => (
              <li key={idx}>
                {item.title}
                {idx !== (Array.isArray(item?.spec) && item.spec?.length) ? ', ' : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.end}>
        <button>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_202_552)">
              <path
                d="M5.33301 6.66669H7.99967H10.6663"
                stroke="#2CB2BB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33301 9.33331H6.66634H7.99967"
                stroke="#2CB2BB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99967 14.6666C11.6815 14.6666 14.6663 11.6818 14.6663 7.99998C14.6663 4.31808 11.6815 1.33331 7.99967 1.33331C4.31777 1.33331 1.33301 4.31808 1.33301 7.99998C1.33301 9.21425 1.65765 10.3527 2.22489 11.3333L1.66634 14.3333L4.66634 13.7748C5.64692 14.342 6.78541 14.6666 7.99967 14.6666Z"
                stroke="#2CB2BB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_202_552">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Отзывы
        </button>
        <Link
          onClick={() => {
            window.scrollTo(0, 0)
          }}
          to={`/doctors/${item.id}`}
        >
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.9249 1.02947C1.60493 0.839849 1.2002 1.07047 1.2002 1.4424V12.5576C1.2002 12.9295 1.60493 13.1602 1.9249 12.9706L11.3034 7.41297C11.6171 7.22705 11.6171 6.77297 11.3034 6.58705L1.9249 1.02947Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
