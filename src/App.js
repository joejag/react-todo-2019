import './App.css'

import React from 'react'
import ToDo from './components/ToDo'

const defaultList = [
  { id: 1, text: 'clean the house' },
  { id: 2, text: 'buy milk' }
]

export default function App () {
  return <ToDo startingTodos={defaultList} />
}
