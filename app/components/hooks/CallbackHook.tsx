import { useCallback, useState} from 'react'

const CallbackHook = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-green-600 px-3 py-2 rounded-md mr-3"
        onClick={() => setCount(count + 1)}
      >
        Change Count
      </button>
      <button
        className="bg-green-600 px-3 py-2 rounded-md"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  )
}

export default CallbackHook