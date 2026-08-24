import { useContext } from 'react'
import { AuthContext } from "../../AuthContext"

type Props = {}

const ContextHookNav = (props: Props) => {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error("Navbar must be used inside AuthProvider")
  }
  return (
    <div>
      <h1>Nav Bar</h1>
      {auth.isLoggedIn ? (
        <button onClick={auth.logout}>Logout</button>
      ) : <button onClick={auth.login}>Login</button>}
    </div>
  )
}

export default ContextHookNav