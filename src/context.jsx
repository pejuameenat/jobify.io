import { createContext, useContext, useState } from 'react'
import { navList, steps, help, offers, testimonies} from './data'
//create context
const GLobalContext = createContext()

//create custom hook and invoke useContext hook
export const useGLobalContext = () => useContext(GLobalContext)
const AppContext = ({ children }) => {
  const [nav, setNav] = useState(navList)
  return (
    <GLobalContext.Provider value={{ nav, steps, help, offers, testimonies }}>
      {children}
    </GLobalContext.Provider>
  )
}
export default AppContext
