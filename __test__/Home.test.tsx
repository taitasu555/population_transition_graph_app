import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../src/pages/index'
import userEvent from '@testing-library/user-event'

describe('home page test', () => {
  it('Should render Home', () => {
    render(<Home />)
    expect(screen.getByText('Loading now...')).toBeInTheDocument()
  })
})
