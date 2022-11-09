import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Toggle from './ui/toggle/Toggle'

const Foot = () => {
  const appContext = useContext(AppContext)
  const isLight = appContext.themeMode === 'light'

  const handleSwitch = () => {
    appContext.changeTheme(isLight ? 'dark' : 'light')
  }
  
  return (
    <>
      <div className="left">
        🦊 <a className="text_link" href="https://twitter.com/httpJunkie/status/1479322790654189569" target="_blank">Stay Foxy</a>
      </div>
      <div className="right">
        <Toggle onChange={handleSwitch} />
      </div>
    </>
  )
}

export default Foot