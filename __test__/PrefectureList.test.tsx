import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PrefecturesList } from '../src/components/List/PrefecturesList'
import { Chart } from '../src/components/Chart/Chart'

const data = [
  {
    prefCode: 1,
    prefName: '北海道',
  },
  {
    prefCode: 2,
    prefName: '青森',
  },
]

describe('Prefecture List test', () => {
  it('Should render Prefecture List correctly', () => {
    const { container } = render(<PrefecturesList prefectures={data} />)
    expect(container.innerHTML).toMatch('北海道')
    expect(container.innerHTML).toMatch('青森')
  })
  it('Should render Chart correctly', () => {
    const populationData = [
      {
        year: '2020',
        value: 20000,
      },
      {
        year: '2015',
        value: 10000,
      },
    ]

    const { container } = render(
      <Chart populationData={populationData} prefName={data[0].prefName} />
    )
    expect(container.innerHTML).toMatch('2020')
    expect(container.innerHTML).toMatch('2015')
    expect(container.innerHTML).toMatch('北海道')
  })
})
