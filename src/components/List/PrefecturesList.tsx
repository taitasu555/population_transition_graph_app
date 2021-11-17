import React, { FC, useEffect, useState } from 'react'
import { prefecture } from '../../types/prefecture'
import styles from '../../styles/components/prefectureList.module.css'
import { APIURL } from '../../common/const'
import axios from 'axios'

type Props = {
  prefectures: prefecture[]
}

type Headers = {
  'X-API-KEY': any
}

// TODO useMemo, useCallbackが必要なコンポーネント
export const PrefecturesList: FC<Props> = (props) => {
  const { prefectures } = props
  const [prefectureCode, setPrefectureCode] = useState<string>()
  const getPrefCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrefectureCode(e.target.value)
  }
  // prefectureCodeが変更されたら、非同期処理を実行する
  const headers: Headers = {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  }
  useEffect(() => {
    const fetcher = async () => {
      const { data } = await axios.get(
        `${APIURL}/api/v1/population/composition/perYear??cityCode=-&prefCode=${prefectureCode}`,
        {
          headers,
        }
      )
      console.log(data)
    }
    fetcher()
  }, [prefectureCode])
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
