import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { SiGithub } from 'react-icons/si'

import Hamburger from './ui/hamburger/Hamburger'

interface AppRoute {
  name: string;
  href: string;
}
interface RouterLinksProps {
  routes: AppRoute[];
}

const RouterLinks = ({ routes }: RouterLinksProps) => {
  return <>
    {routes.map(
      (route, idx) =>
        <li className="link" key={`${route.name}-${idx}`}>
          <Link className='text_link' href={route.href}>
            {route.name}
          </Link>
        </li>
    )}
  </>
}

const Menu = () => {
  const appContext = useContext(AppContext)
  const handleClick = () => {
    appContext.toggleSidenav(!appContext.navOpen)
  }

  const myAppRoutes: AppRoute[] = [
    { name: "home", href: "/" },
    { name: "mint", href: "/mint" }
  ]

  return (
    <ul style={{ userSelect: 'none' }}>
      <RouterLinks routes={myAppRoutes} />
      <li className='link'>
        <a className='text_link' tabIndex={4} href='https://github.com/httpJunkie/web3-dubai-mm-workshop'>
          <SiGithub />
        </a>
      </li>
      <li className='menu'>
        <Hamburger onClick={handleClick} />
      </li>
    </ul>
  )
}

export default Menu