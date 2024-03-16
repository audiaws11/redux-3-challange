import { Fragment } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux'

const App = () => {
  const authentic = useSelector((store) => store.authentic)
  const { isAuth } = authentic
  console.log(authentic)
  
  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  )
}

export default App
