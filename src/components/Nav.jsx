import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useGLobalContext } from '../context'
import { memo } from 'react'
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
          Jobi
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
            fy
          </span>
        </a>
        {/* secod child */}
        <div className="flex lg:mr-auto items-center gap-3">
          <button
            type="button"
            className="smoothTransition font-bold lg:absolute right-40 z-50"
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
        {/* e */}
      </div>
      {/* nav center*/}
      <div
        className={
          menuBar
            ? 'grow h-auto smoothTransition'
            : 'grow overflow-hidden h-0 sm:relative lg:h-auto smoothTransition'
        }
      >
        <ul
          id="mobile-nav-list"
          className={
            'p-2 w-full bg-white lg:bg-transparent h-fit sm:shadow-xl lg:py-0 lg:shadow-none lg:flex gap-4 lg:flex-row items-center bg-inherit'
          }
        >
          {navList.map((item) => (
            <li
              key={item.id}
              className="px-1 text-slate-900 lg:text-inherit"
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

export default memo(Nav)
