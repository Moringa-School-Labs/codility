import React from 'react'

const ServerSide = async () => {
  console.log("SERVER:", new Date().toISOString());

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1>
        This is a server-side rendered component
      </h1>
      <p>Content is generated on the server at every request time.</p>
      {users.map((user: {id: number, name: string}) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ServerSide