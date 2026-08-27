import { useMemo, useState} from 'react'

const MemoHook = () => {
  const [number, setNumber] = useState(2)
  const [count, setCount] = useState(0)

  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return number * number
  }, [number])

  return (
    <div>
      <p>Squared Number: {squaredNumber}</p>
      <button
        className="bg-green-600 px-3 py-2 rounded-md mr-3"
        onClick={() => setNumber(number + 1)}
      >
        Change Number
      </button>
      <button
        className="bg-green-600 px-3 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default MemoHook