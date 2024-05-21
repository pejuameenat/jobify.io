import Nav from './Nav'
import Hero from './Hero'
import Steps from './Steps'
import Help from './Help'
import Companies from './Companies'
import TestimonySection from './TestimonySection'
import Footer from './Footer'

const App = () => {
  return (
    <div className="app bg-gradient-to-r from-orange-50 from-5% via-neutral-100 to-neutral-50">
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Help />
        <Companies />
        <TestimonySection />
        <Footer />
      </main>
    </div>
  )
}

export default App
