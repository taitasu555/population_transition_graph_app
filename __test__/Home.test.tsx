import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../src/pages/index'

it('Should render home page', () => {
  render(<Home />)
  expect(screen.getByText('Loading now...')).toBeInTheDocument()
})
