import Nav from './Nav'
import { Hero, Help } from './Pages'
import Steps from './Steps'
import Companies from './JobCategory'
import TestimonySection from './TestimonySec'
import Footer from './Footer'
import Modal from './Modal'
import { useGLobalContext } from '../context'

const App = () => {
  const {mode} = useGLobalContext()
  return (
    <div
      className={
        mode?
           'text-white  bg-slate-900 ':
           'app bg-gradient-to-r from-orange-50 from-5% via-neutral-100 to-neutral-50'
      }
    >
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Help />
        <Companies />
        <TestimonySection />
        <Modal />
        <Footer />
      </main>
    </div>
  )
}

export default App
