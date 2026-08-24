import { useEffect, useState } from 'react'

type User = {
  id: number;
  name: string;
  username: string
}

const EffectHook = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    console.log("Component Loaded");

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data: User[]) => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>

      <div className="text-green-500">
        {users.map((user) => (
          <p key={user.id}>{`My name is ${user.name} and my username is ${user.username}`}</p>
        ))}
      </div>
    </div>
  );
}

export default EffectHook