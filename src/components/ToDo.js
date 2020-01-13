import './ToDo.css'

import React, { useState } from 'react'

import Logo from '../assets/logo.png'
import ToDoItem from './ToDoItem'

const ToDo = ({ startingTodos }) => {
  const [list, setList] = useState(startingTodos)
  const [toDo, setToDo] = useState('')

  const generateId = () => {
    if (list && list.length > 0) {
      return Math.max(...list.map(t => t.id)) + 1
    } else {
      return 1
    }
  }

  const createNewToDoItem = () => {
    setTimeout(() => {
      if (!toDo) {
        alert('Please enter a todo!')
        return
      }
      const newId = generateId()
      const newToDo = { id: newId, text: toDo }
      setList([...list, newToDo])
      setToDo('')
    }, 6000)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      createNewToDoItem()
    }
  }

  const handleInput = e => {
    setToDo(e.target.value)
  }

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <div className='ToDo'>
      <img className='Logo' src={Logo} alt='React logo' />
      <h1 className='ToDo-Header'>React To Do</h1>
      <div className='ToDo-Container'>
        <div className='ToDo-Content'>
          {list.map(item => (
            <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />
          ))}
          {list.length === 0 && <span>All done!</span>}
        </div>

        <div className='ToDoInput'>
          <input
            type='text'
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className='ToDo-Add' onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToDo
