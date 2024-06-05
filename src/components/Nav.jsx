import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useGLobalContext } from '../context'
const Nav = () => {
  const { navList, openModalFunc, menuBar, setMenuBar, mode, setMode } =
    useGLobalContext()
  const [currentTab, setCurrentTab] = useState(0)
  const currentTabFunc = (id) => {
    id !== currentTab ? setCurrentTab(id) : id
  }

  return (
    <nav className={mode ? 'bg-inherit navContainer' : 'gradient navContainer'}>
      <div className="flex justify-between px-3">
        <a href="#home" className="titleHead text-4xl">
          Jobi<span className="text-orange-600">fy</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="smoothTransition font-bold lg:fixed right-40"
            onClick={() => setMode((prevMode) => !prevMode)}
          >
            {mode ? 'Light mode' : 'Dark mode'}
            {mode ? <ToggleOff /> : <ToggleOn />}
          </button>
          <button
            type="button"
            onClick={() => setMenuBar((prevState) => !prevState)}
          >
            <FaBars className="lg:hidden" />
          </button>
        </div>
      </div>
      {/* nav center*/}
      <div
        className={
          menuBar ? 'grow h-auto' : 'grow overflow-hidden h-0 lg:h-auto'
        }
      >
        <ul
          className={
            'px-2 bg-white lg:bg-transparent h-fit sm:shadow-xl lg:shadow-none lg:flex gap-4 lg:flex-row items-center smoothTransition bg-inherit'
          }
        >
          {navList.map((item) => (
            <li
              key={item.id}
              className="px-1"
              onClick={() => currentTabFunc(item.id)}
            >
              <a
                href={item.href}
                className={
                  item.id !== currentTab
                    ? 'relative smoothTransition ease-in navLink'
                    : 'relative smoothTransition ease-in navLink active-btn'
                }
              >
                {item.list}
              </a>
            </li>
          ))}

          <button
            type="button"
            className="orangeButtons mx-0 lg:ml-auto hoverState"
            onClick={openModalFunc}
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
