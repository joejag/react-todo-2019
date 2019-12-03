import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'

import App from './App'
import React from 'react'
import expectExport from 'expect'

it('has a sample test', () => {
  const { getByText } = render(<App />)
  expectExport(getByText('React To Do')).toBeInTheDocument()
})
