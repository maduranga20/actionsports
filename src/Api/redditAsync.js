// import React from 'react'

// https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from "react"

function JsonFetch() {
// const API_ROOT = 'https://www.reddit.com';

  const url = 'https://www.reddit.com/subreddits.json'
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
  }

  console.log(users);
  
  useEffect(() => {
    fetchData()
  }, [])


  //  {users.length > 0 && (
  //       <ul>
  //         {users.map(user => (
  //           <li key={user.id}>{user.name}</li>
  //         ))}
  //       </ul>
  //     )}

  return (
    <div>
     
    </div>
  )
}

export default JsonFetch;


// https://medium.com/@greennolgaa/mastering-asynchronous-data-handling-in-react-a-comprehensive-guide-using-fetch-and-axios-28f5bd9885e5
// https://medium.com/@HelloMoto69/fetch-and-display-data-from-api-in-reactjs-18386a68b19b
// https://medium.com/@olivier.trinh/how-to-use-fetch-in-react-js-b142f372dfb5