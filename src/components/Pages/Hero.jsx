import InputBuilder from './InputBuilder'
import heroImage from '../../assets/undraw_hero.svg'
import { useGLobalContext } from '../../context'
const Hero = () => {
  const {mode} = useGLobalContext()
  return (
    <section id="home">
      <div className="lg:flex items-center containerWidth">
        <header className="py-6 text-center lg:text-left">
          <h1 className="   text-4xl lg:text-5xl titleHead">
            Find Your{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              Dream Job{' '}
            </span>
            Now it's Easy.
          </h1>
          <p className="py-4">
            Thousands of jobs here, find your new job today, new job postings
            today!
          </p>
          <form
            className={
              mode
                ? 'shadow-slate-800 w-full lg:h-12 gap-4 shadow-lg bg-white py-2 rounded-md lg:rounded-2xl px-2 text-sm grid grid-cols-1 lg:grid-cols-3 items-center'
                : 'w-full lg:h-12 gap-4 shadow-lg shadow-slate-200 bg-white py-2 rounded-md lg:rounded-2xl px-2 text-sm grid grid-cols-1 lg:grid-cols-3 items-center'
            }
          >
            <InputBuilder property="Job title or keyword" />
            <InputBuilder property="Region e.g New York, USA." />
            <button
              type="button"
              className=" bg-orange-500 text-white rounded-lg p-1 shadow-md shadow-orange-400 hover:opacity-80 transition duration-500"
            >
              Search
            </button>
          </form>
        </header>
        <img
          src={heroImage}
          className="max-w-full w-1/2 m-auto"
          alt="a woman thinking of how to get jobs to apply to"
        />
      </div>
    </section>
  )
}

export default Hero
