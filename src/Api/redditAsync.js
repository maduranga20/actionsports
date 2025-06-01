
// import React, { useEffect, useState } from "react"

// function JsonFetch() {

//   const url = 'https://www.reddit.com/subreddits.json'
//   const [users, setUsers] = useState([])

//   const fetchData = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
//     setUsers(data)
//   }

//   console.log(users);
  
//   useEffect(() => {
//     fetchData()
//   }, [])


//   return (
//     <div>
     
//     </div>
//   )
// }


const API_ROOT = 'https://www.reddit.com';

export const getAllSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const jsonResponse = await response.json();

  return jsonResponse.data.children.map((subreddit) => subreddit.data);
};

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const jsonResponse = await response.json();

  return jsonResponse.data.children.map((post) => post.data);
};


export default JsonFetch;


// https://medium.com/@greennolgaa/mastering-asynchronous-data-handling-in-react-a-comprehensive-guide-using-fetch-and-axios-28f5bd9885e5
// https://medium.com/@HelloMoto69/fetch-and-display-data-from-api-in-reactjs-18386a68b19b
// https://medium.com/@olivier.trinh/how-to-use-fetch-in-react-js-b142f372dfb5