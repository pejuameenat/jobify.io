import heroImage from '../assets/undraw_hero.svg'
const Hero = () => {
  return (
    <section>
      <div className="lg:flex items-center max-w-7xl w-11/12 mx-auto">
        <header className="py-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl titleHead">
            Find Your <span className="text-orange-500">Dream Job </span>Now
            it's Easy.
          </h1>
          <p className="py-4">
            Thousands of jobs here, find your new job today, new job postings
            today!
          </p>
          <form className="shadow-lg shadow-slate-200 bg-white rounded-2xl px-3 py-1 w-full h-12 flex text-sm items-center justify-between">
            <div>
              <input placeholder="job title or keyword" />
            </div>
            <div>
              <span>New York, USA.</span>
            </div>
            <button
              type="button"
              className="w-1/5 bg-orange-500 text-white rounded-2xl p-1 shadow-md shadow-orange-200"
            >
              Search
            </button>
          </form>
        </header>
        <img src={heroImage} className="max-w-full w-1/2 m-auto" alt="" />
      </div>
    </section>
  )
}

export default Hero
