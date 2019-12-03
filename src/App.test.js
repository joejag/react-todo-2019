import '@testing-library/jest-dom/extend-expect'

import App from './App'
import React from 'react'
import expectExport from 'expect'
import { render } from '@testing-library/react'

it('has a sample test', () => {
  const { getByText } = render(<App />)
  expectExport(getByText('React To Do')).toBeInTheDocument()
})
