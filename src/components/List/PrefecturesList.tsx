import React, { FC, useEffect, useState } from 'react'
import { prefecture } from '../../types/prefecture'
import styles from '../../styles/components/prefectureList.module.css'
import { APIURL } from '../../common/const'
import axios from 'axios'
import { Chart } from '../Chart/Chart'

type Props = {
  prefectures: prefecture[]
}

type Headers = {
  'X-API-KEY': any
}

// TODO useMemo, useCallbackが必要なコンポーネント
export const PrefecturesList: FC<Props> = (props) => {
  const { prefectures } = props
  const [prefectureCode, setPrefectureCode] = useState<number>(1)
  const [populationData, setPopulationData] = useState<{}>({})
  const [prefectureName, setPrefectureName] = useState<string>('北海道')

  // prefectureCodeが変更されたら、非同期処理を実行する
  const headers: Headers = {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  }

  const getPrefCodeAndName = (prefCode: number, prefName: string) => {
    setPrefectureCode(prefCode)
    setPrefectureName(prefName)
  }

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `${APIURL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
        {
          headers,
        }
      )
      setPopulationData(response.data.result.data[0].data)
      console.log(response.data)
    }
    fetcher()
  }, [prefectureCode])

  return (
    <>
      <div className={styles.container}>
        {prefectures.map((pref) => {
          return (
            <div className={styles.PrefList} key={pref.prefCode}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => getPrefCodeAndName(pref.prefCode, pref.prefName)}
                  value={pref.prefCode}
                  checked={prefectureCode == pref.prefCode}
                />
                {pref.prefName}
              </label>
            </div>
          )
        })}
      </div>
      <div>
        <Chart populationData={populationData} prefName={prefectureName} />
      </div>
    </>
  )
}
