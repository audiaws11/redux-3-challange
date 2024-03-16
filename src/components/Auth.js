import classes from './Auth.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAuth } from '../featuress/authenticSlice'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const handleLogin = () => {
    if (!email || !password) return
    dispatch(createAuth(email, password))
    setEmail('')
    setPassword('')
  } 
  
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth;
