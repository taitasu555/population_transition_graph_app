import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PrefecturesList } from '../src/components/List/PrefecturesList'

afterEach(() => cleanup())

describe('home page test', () => {
  it('Should render PrefectureList correctly', () => {
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
    const { container } = render(<PrefecturesList prefectures={data} />)
    expect(container.innerHTML).toMatch('北海道')
    expect(container.innerHTML).toMatch('青森')
  })
})

describe('useEffect rendering', () => {})
