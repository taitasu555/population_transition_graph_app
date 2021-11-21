import React, { FC, memo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  populationData: {
    year: string
    value: number
  }[]
  prefName: string
}
// eslint-disable-next-line react/display-name
export const Chart: FC<Props> = memo((props) => {
  const { populationData, prefName } = props

  const populationValue: number[] = populationData.map((data) => {
    return data.value
  })
  const years: string[] = populationData.map((data) => {
    return data.year
  })

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移グラフ',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: years,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series: [
      {
        type: 'line',
        name: prefName,
        data: populationValue,
      },
    ],
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
})
