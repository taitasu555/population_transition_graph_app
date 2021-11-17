import React, { FC } from 'react'
import { prefecture } from '../../types/prefecture'
import styles from '../../styles/components/prefectureList.module.css'

type Props = {
  prefectures: prefecture[]
}

export const PrefecturesList: FC<Props> = (props) => {
  const { prefectures } = props
  console.log(prefectures)
  return (
    <div className={styles.container}>
      {prefectures.map((pref) => {
        return (
          <div className={styles.PrefList} key={pref.prefCode}>
            <label>
              <input type="checkbox" />
              {pref.prefName}
            </label>
          </div>
        )
      })}
    </div>
  )
}
