import React, { FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  populationData:
    | {
        year: number
        value: number
      }[]
    | any
}
export const Chart: FC<Props> = (props) => {
  const { populationData } = props
  const newData: Array<number> = []
  if (populationData.length > 0) {
    populationData.forEach((data: { year: number; value: number }) => {
      newData.push(data.value)
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: 'My chart',
    },
    series: [
      {
        type: 'line',
        data: newData,
      },
    ],
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
