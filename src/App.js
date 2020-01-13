import React from 'react'

export const App = () => {
  const [persons, setPersons] = React.useState([])

  const fetchUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(persons => {
        setPersons(persons)
      })

  return (
    <>
      <button onClick={fetchUsers}>Load users</button>
      {persons.length > 0 && (
        <>
          <h2>Users</h2>
          <ul>
            {persons.map(person => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default App
