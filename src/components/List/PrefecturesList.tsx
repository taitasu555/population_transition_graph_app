import React, { FC, useState } from 'react'
import { prefecture } from '../../types/prefecture'
import styles from '../../styles/components/prefectureList.module.css'

type Props = {
  prefectures: prefecture[]
}

export const PrefecturesList: FC<Props> = (props) => {
  const { prefectures } = props
  const [prefectureCode, setPrefectureCode] = useState<string>()
  const getPrefCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrefectureCode(e.target.value)
  }
  return (
    <div className={styles.container}>
      {prefectures.map((pref) => {
        return (
          <div className={styles.PrefList} key={pref.prefCode}>
            <label>
              <input
                type="checkbox"
                onChange={getPrefCode}
                value={pref.prefCode}
                checked={prefectureCode == pref.prefCode.toString()}
              />
              {pref.prefName}
            </label>
          </div>
        )
      })}
      {prefectureCode}
    </div>
  )
}
