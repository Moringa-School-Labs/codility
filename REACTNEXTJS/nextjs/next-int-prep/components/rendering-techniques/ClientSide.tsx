"use client" // This component needs to run on the client.

import { useState } from 'react'

const ClientSide = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1>This is a client-side rendered component</h1>
      <p>Content is generated on the client/browser at runtime.</p>
      <p>Count: {count}</p>
      <button className="bg-blue-600 px-3 py-2 rounded-lg" onClick={handleCount}>Increment Count</button>
    </div>
  )
}

export default ClientSide