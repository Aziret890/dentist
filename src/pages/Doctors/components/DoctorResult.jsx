import clsx from 'clsx'
import { useDoc } from '../../../app/context/DoctorsContext'
import styles from '../page.module.scss'
import DocCard from './ui/DocCard'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../../shared/ui/Loader'
import NoResultFound from '../../NoResultFound/page'

export default function DoctorResult() {
  const { filteredDoc, getDoctors, queryDoc, tabSpec } = useDoc()

  const { isLoading } = useQuery({
    queryKey: ['doctors', queryDoc, tabSpec],
    queryFn: getDoctors,
  })

  return (
    <div className={styles.result}>
      {filteredDoc?.length !== 0 ? (
        filteredDoc?.map((item, idx) => <DocCard key={idx} idx={idx} styles={styles} item={item} />)
      ) : isLoading ? (
        <div className="flex items-center justify-center min-h-[30vh] w-full">
          <Loader />
        </div>
      ) : (
        <div className={clsx(`${styles['not-result']} flex items-center w-full py-3 justify-center`)}>
          <NoResultFound />
        </div>
      )}
    </div>
  )
}
