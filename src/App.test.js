import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'

import React from 'react'
import ToDo from './components/ToDo'
import { act } from 'react-dom/test-utils'

jest.useFakeTimers()

const defaultList = [
  { id: 1, text: 'clean the house' },
  { id: 2, text: 'buy milk' }
]

it('starts with two items already todo', () => {
  const { getAllByRole } = render(<ToDo startingTodos={defaultList} />)
  const items = getAllByRole('listitem')
  expect(items.length).toBe(2)
  expect(items[0]).toHaveTextContent('clean the house')
  expect(items[1]).toHaveTextContent('buy milk')
})

it('allows you to add a new todo item', () => {
  const { getByRole, getAllByRole, getByText } = render(
    <ToDo startingTodos={defaultList} />
  )

  fireEvent.change(getByRole('textbox'), { target: { value: 'new todo' } })
  fireEvent.click(getByText('+'))
  act(() => {
    jest.runAllTimers()
  })

  const items = getAllByRole('listitem')
  expect(items.length).toBe(3)
  expect(items[2]).toHaveTextContent('new todo')
})
it('allows you to remove a todo item', () => {
  const { getByLabelText, getAllByRole } = render(
    <ToDo startingTodos={defaultList} />
  )

  fireEvent.click(getByLabelText('delete clean the house'))

  expect(getAllByRole('listitem').length).toBe(1)
})
it('allows you to clear all of the todo items', () => {
  const { getByLabelText, queryByRole } = render(
    <ToDo startingTodos={defaultList} />
  )

  fireEvent.click(getByLabelText('delete clean the house'))
  fireEvent.click(getByLabelText('delete buy milk'))

  expect(queryByRole('listitem')).not.toBeInTheDocument()
})
it('add two new ones and delete the first', () => {
  const { getAllByRole, getByRole, getByText } = render(
    <ToDo startingTodos={[]} />
  )

  fireEvent.change(getByRole('textbox'), { target: { value: 'new todo 1' } })
  fireEvent.click(getByText('+'))
  act(() => {
    jest.runAllTimers()
  })

  fireEvent.change(getByRole('textbox'), { target: { value: 'new todo 2' } })
  fireEvent.click(getByText('+'))
  act(() => {
    jest.runAllTimers()
  })

  expect(getAllByRole('listitem').length).toBe(2)
})
it('show a message if all todo items are completed', () => {
  const { getByText } = render(<ToDo startingTodos={[]} />)

  expect(getByText('All done!')).toBeInTheDocument()
})
