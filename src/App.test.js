import '@testing-library/jest-dom/extend-expect'

import App from './App'
import React from 'react'
import { render } from '@testing-library/react'

it('has a sample test', () => {
  const { getByText } = render(<App />)
  expect(getByText('React To Do')).toBeInTheDocument()
})

// TODO: Complete these tests

it('starts with two items already todo', () => {})
it('allows you to add a new todo item', () => {})
it('allows you to remove a todo item', () => {})
it('allows you to clear all of the todo items', () => {})
it('can clear all items, add two new ones and delete the first', () => {
  // this one has a bug. We are using the test to reveal it
})
it('works with async calls', () => {
  // Add a setTimeout(() => {},5000) within ToDo.createNewToDoItem()
})
it('show a message if all todo items are completed', () => {
  // this is a new feature. See if you can test drive it
})
