import "./ToDoItem.css"

import React from "react"

const ToDoItem = (props) => {
  const { item, deleteItem } = props

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item.text}</p>
      <button className="ToDoItem-Delete" aria-label={`Delete ${item.text}`} onClick={() => deleteItem(item.id)}>
        -
      </button>
    </div>
  )
}

export default ToDoItem
