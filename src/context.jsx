import { createContext, useContext, useState } from 'react'
import { navList, steps, help, offers, testimonies, footerList } from './data'
//create context
const GLobalContext = createContext()

//create custom hook and invoke useContext hook
export const useGLobalContext = () => useContext(GLobalContext)
const AppContext = ({ children }) => {
  const [like, setLike] = useState(false)
  const [schedule, setSchedule] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)
  const toggleLike = (id) => {
    id!==currentItem? setCurrentItem(id):setLike((prev) => !prev)  
  }
    
  return (
    <GLobalContext.Provider
      value={{
        navList,
        steps,
        help,
        offers,
        testimonies,
        footerList,
        like,
        toggleLike,
        currentItem,
        schedule, setSchedule
      }}
    >
      {children}
    </GLobalContext.Provider>
  )
}
export default AppContext
