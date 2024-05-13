import { useGLobalContext } from "../context"
const Nav = () => {
  const {nav} = useGLobalContext()
  return (
    <nav>
      <a href="#home">
        Jobi<span>fy</span>
      </a>
      <div>
        {nav.map((item) => (
          <li key={item.id}>
            <a href="#">{item.list}</a>
          </li>
        ))}
      </div>
      <button type="button">Login</button>
    </nav>
  )
}

export default Nav