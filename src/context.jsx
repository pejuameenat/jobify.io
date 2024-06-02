import { createContext, useContext, useState } from 'react'
import {
  navList,
  steps,
  help,
  offerFullTime,
  offerPartTime,
  testimonies,
  footerList,
} from './data'
//create context
const GLobalContext = createContext()

//create custom hook and invoke useContext hook
export const useGLobalContext = () => useContext(GLobalContext)
const AppContext = ({ children }) => {
  const [like, setLike] = useState(false)
  const [schedule, setSchedule] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [menuBar, setMenuBar] = useState(false)
  const [mode, setMode] = useState(false)

  const toggleLike = (id) => {
    id !== currentItem ? setCurrentItem(id) : setLike((prevLike) => !prevLike)
  }
  const openModalFunc = () => setShowModal(true)
  const closeModalFunc = () => setShowModal(false)

  return (
    <GLobalContext.Provider
      value={{
        navList,
        steps,
        help,
        offerFullTime,
        offerPartTime,
        testimonies,
        footerList,
        like,
        toggleLike,
        currentItem,
        schedule,
        setSchedule,
        showModal,
        openModalFunc,
        closeModalFunc,
        menuBar,
        setMenuBar,
        mode,
        setMode,
      }}
    >
      {children}
    </GLobalContext.Provider>
  )
}
export default AppContext
