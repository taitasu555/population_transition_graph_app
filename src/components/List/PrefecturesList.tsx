import React, { FC, useEffect, useState, memo } from 'react'
import { PrefectureType } from '../../types/types'
import styles from '../../styles/components/prefectureList.module.css'
import { Chart } from '../Chart/Chart'
import { getChart } from '../../lib/fetch'

type Props = {
  prefectures: PrefectureType[]
}

type PopulationDataType = {
  year: string
  value: number
}

// eslint-disable-next-line react/display-name
export const PrefecturesList: FC<Props> = memo((props) => {
  const { prefectures } = props
  const [prefectureCode, setPrefectureCode] = useState<number>(1)
  const [populationData, setPopulationData] = useState<PopulationDataType[]>([])
  const [prefectureName, setPrefectureName] = useState<string>('北海道')

  const getPrefCodeAndName = (prefCode: number, prefName: string) => {
    setPrefectureCode(prefCode)
    setPrefectureName(prefName)
  }
  useEffect(() => {
    ;(async () => {
      const fetcherData = await getChart(prefectureCode)
      setPopulationData(fetcherData)
    })()
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
      <div className={styles.chart}>
        <Chart populationData={populationData} prefName={prefectureName} />
      </div>
    </>
  )
})
