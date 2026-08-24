import { useState } from 'react'

const StateHook = () => {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)


  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSubscribe = () => {
    setIsSubscribed(true)
  }

  const handleUnSubscribe = () => {
    setIsSubscribed(false)
  }


  return (
    <div className="flex flex-col gap-5">
      <p>{count}</p>
      <button onClick={handleIncrement}>Click me</button>

      {isLoggedIn ? (
        <div className="flex flex-col gap-4">
          Welcome home
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          Please Log in
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {isSubscribed ? (
        <div className="flex flex-col gap-4">
          Welcome to dashboard
          <button onClick={handleUnSubscribe}>Unsubscribe</button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          You have not subscribed
          <button onClick={handleSubscribe}>Pay to Subscribe</button>
        </div>
      )}
    </div>
  );
}

export default StateHook