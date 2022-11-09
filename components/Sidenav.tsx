import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Menu from './Menu'

const Sidenav = () => {
  const appContext = useContext(AppContext)
  return (
    <div className={`sidenav ${appContext.navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
  )
}

export default Sidenav