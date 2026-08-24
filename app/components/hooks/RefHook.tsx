import { useRef } from 'react'

type Props = {}

const RefHook = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => { 
    inputRef.current?.focus();
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <input ref={inputRef}
        placeholder="Type Here..."
        className="px-3 py-2 border border-gray-500 rounded-md"
      />
      <button onClick={handleFocus} className="bg-green-600 px-3 py-2 rounded-md">Focus Input</button>
    </div>
  );
}

export default RefHook