import { render, screen } from '@testing-library/react'

import Index from '../src/pages/index'

describe('Index', () => {
  it('renders without crashing', () => {
    render(<Index />)
    expect(screen.getByText(/flora/i)).toBeInTheDocument()
  })
})
