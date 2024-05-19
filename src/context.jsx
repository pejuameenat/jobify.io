import { createContext, useContext, useState } from 'react'
import { navList, steps, help, offers} from './data'
//create context
const GLobalContext = createContext()

//create custom hook ad invoke useContext hook
export const useGLobalContext = () => useContext(GLobalContext)
const AppContext = ({ children }) => {
  const [nav, setNav] = useState(navList)
  return (
    <GLobalContext.Provider value={{ nav, steps, help, offers }}>{children}</GLobalContext.Provider>
  )
}
export default AppContext
