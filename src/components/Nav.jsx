import { FaBars } from 'react-icons/fa'
import { useGLobalContext } from '../context'
const Nav = () => {
  const { nav } = useGLobalContext()
  return (
    <nav className="p-3 flex gap-20 flex-col justify-between lg:items-center lg:flex-row">
      <div className="flex justify-between ">
        <a href="#home" className="titleHead text-4xl">
          Jobi<span className="text-orange-600">fy</span>
        </a>
        <FaBars className="lg:hidden" />
      </div>
      {/* nav center */}
      <div className="hidden lg:flex gap-4 lg:flex-row items-center grow">
        {nav.map((item) => (
          <li key={item.id} className="">
            <a
              href="#"
              className="relative transition duration-500 ease-in navLink"
            >
              {item.list}
            </a>
          </li>
        ))}
        <button type="button" className="orangeButtons ml-auto hoverState">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
