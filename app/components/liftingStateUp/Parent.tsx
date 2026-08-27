import { useState} from 'react'
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('')

  const handleMessage = (MessageFromChild: string) => {
    setMessage(MessageFromChild)
  }

  return (
    <div>
      <h1>{message}</h1>
      <Child onSendMessage={handleMessage} />
    </div>
  )
}

export default Parent