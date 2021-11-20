import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../src/pages/index'
import { APIURL } from '../src/common/const'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get(`${APIURL}/api/v1/prefectures`, (req, res, ctx) => {
    return res(ctx.json([{ prefCode: 1, prefName: '北海道' }]))
  })
)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('home page test', () => {
  it('Should render home page', async () => {
    render(<Home />)
    expect(screen.getByText('都道府県人口推移グラフ')).toBeInTheDocument()
    expect(await screen.findByText('北海道')).toBeInTheDocument()
    expect(screen.getByText('Author by Taishin')).toBeInTheDocument()
    screen.debug()
  })
})
