import Nav from './Nav '
import Hero from './Hero'
import Steps from './Steps'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <main>
        <Hero />
        <Steps/>
      </main>
    </div>
  )
}

export default App
