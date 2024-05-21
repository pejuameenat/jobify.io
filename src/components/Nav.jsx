import { useGLobalContext } from '../context'
const Nav = () => {
  const { nav } = useGLobalContext()
  return (
    <nav className="p-3 flex flex-col lg:justify-between lg:items-center">
      <div className='flex justify-between'>
        <a href="#home" className="titleHead text-3xl">
          Jobi<span className="text-orange-600">fy</span>
        </a>
        {/* meu */}
      </div>
      <div className="hidden flex flex-col gap-4 lg:flex-row items-center flex-grow-1">
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
        <button type="button" className="orangeButtons">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
