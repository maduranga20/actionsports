// import React from 'react'
// const API_ROOT = 'https://www.reddit.com';

// https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from "react"

function JsonFetch() { 

  const url = "API_ROOT"
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default JsonFetch;