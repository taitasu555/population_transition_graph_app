import React, { FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  populationData: {
    year: string
    value: number
  }[]
  prefName: string
}
export const Chart: FC<Props> = (props) => {
  const { populationData, prefName } = props
  const populationValue: Array<number> = []
  const Date: Array<string> = []
  if (populationData.length > 0) {
    populationData.forEach((data: { year: string; value: number }) => {
      populationValue.push(data.value)
      Date.push(data.year.toString())
    })
  }
  const options: Highcharts.Options = {
    title: {
      text: '総人口推移グラフ',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: Date,
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
}
