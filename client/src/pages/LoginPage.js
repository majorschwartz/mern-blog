import React from 'react'

const LoginPage = () => {
  return (
    <form className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
    </form>
  )
}

export default LoginPage