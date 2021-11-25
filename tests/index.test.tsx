import { render, screen } from '@testing-library/react'

import { AccessibilityControl } from '~/hooks/AccessibilityControl'

import Index from '../src/pages/index'

describe('Index', () => {
  it('renders without crashing', () => {
    render(
      <AccessibilityControl>
        <Index />
      </AccessibilityControl>,
    )
    expect(
      screen.getByText(/Nosso compromisso com a acessibilidade/i),
    ).toBeInTheDocument()
  })
  it('use popover', async () => {
    render(
      <AccessibilityControl>
        <Index />
      </AccessibilityControl>,
    )

    await screen.getByTestId('button-accessibility').click()
    const rolesToClick = [
      ...(await screen.getAllByRole('checkbox')),
      ...(await screen.getAllByRole('switch')),
    ]
    rolesToClick.forEach((buttons) => {
      buttons.click()
    })
  })
})
