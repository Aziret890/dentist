import { useLocation } from 'react-router-dom'
import styles from './page.module.scss'

export default function Example() {
  const location = useLocation().search
  const searchParams = new URLSearchParams(location)
  const send = searchParams.get('send')

  return <main>{send}</main>
}
