import { FaBars } from 'react-icons/fa'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useGLobalContext } from '../context'
const Nav = () => {
  const { navList, openModalFunc, menuBar, setMenuBar, mode, setMode } =
    useGLobalContext()
  return (
    <nav className="sticky py-1 flex lg:gap-20 flex-col justify-between lg:items-center lg:flex-row">
      <div className="flex justify-between px-3">
        <a href="#home" className="titleHead text-4xl">
          Jobi<span className="text-orange-600">fy</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="smoothTransition lg:justify-self-end"
            onClick={() => setMode((prevMode) => !prevMode)}
          >
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
      {/* nav center absolute top-14 w-full relative */}
      <div
        className={
          menuBar ? 'grow h-auto' : 'grow overflow-hidden h-0 lg:h-auto'
        }
      >
        <ul
          className={
            'p-4 bg-white lg:bg-transparent  h-fit sm:shadow-xl lg:shadow-none lg:flex gap-4 lg:flex-row items-center smoothTransition'
          }
        >
          {navList.map((item) => (
            <li key={item.id} className="p-1">
              <a
                href={item.href}
                className="relative transition duration-500 ease-in navLink"
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
