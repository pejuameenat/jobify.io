import Nav from './Nav '
import Hero from './Hero'
import Steps from './Steps'
import Help from './Help'
import Companies from './Companies'
import TestimonySection from './TestimonySection'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Help />
        <Companies />
        <TestimonySection/>
      </main>
    </div>
  )
}

export default App
