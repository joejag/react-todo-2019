import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, waitForElement } from '@testing-library/react'

import App from './App'
import React from 'react'

test('loads and displays users', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => [{ id: 1, name: 'Santa' }] })
  )
  const { getByText, getByRole } = render(<App />)

  fireEvent.click(getByText('Load users'))

  await waitForElement(() => getByRole('list'))
  expect(getByRole('heading')).toHaveTextContent('Users')
  expect(getByText('Santa')).toBeInTheDocument()
})
