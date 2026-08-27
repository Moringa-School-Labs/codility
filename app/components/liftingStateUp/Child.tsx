import React from 'react'

type ChildProps = {
  onSendMessage: (message: string) => void
}

const Child = ({ onSendMessage }: ChildProps) => {
  const handleClick = () => {
    onSendMessage('Hello from child!')
  }

  return (
    <button className="bg-green-600 text-white py-2 px-4 rounded mt-5" onClick={handleClick}>
      Send Message
    </button>
  )
}

export default Child