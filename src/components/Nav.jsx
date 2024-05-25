import { FaBars } from 'react-icons/fa'
import { useGLobalContext } from '../context'
const Nav = () => {
  const { navList, setShowModal, setMenuBar } = useGLobalContext()
  return (
    <nav className="p-3 flex lg:gap-20 flex-col justify-between lg:items-center lg:flex-row">
      <div className="flex justify-between ">
        <a href="#home" className="titleHead text-4xl">
          Jobi<span className="text-orange-600">fy</span>
        </a>
        <button type="button" onClick={()=>setMenuBar(prevState=> !prevState)}>
          <FaBars className="lg:hidden" />
        </button>
      </div>
      {/* nav center  hidden absolute top-14 w-full relative */}
      <div className="p-4 bg-white lg:bg-transparent sm:shadow-xl lg:shadow-none lg:flex gap-4 lg:flex-row items-center grow">
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
          className="orangeButtons float-left lg:ml-auto hoverState"
          onClick={() => setShowModal(true)}
        >
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
