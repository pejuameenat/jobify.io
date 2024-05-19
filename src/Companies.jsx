import manImage from '../src/assets/manpointing.png'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useGLobalContext } from './context'
import JobTemp from './JobTemp'
const Companies = () => {
  const { offers } = useGLobalContext()
  return (
    <section>
      <div className="w-11/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-32 items-center">
        <article className="text-center lg:text-left">
          <h3 className="titleHead text-3xl ">
            500+ World Top company Posted their jobs
          </h3>
          <span className="font-light text-sm py-2">
            Ready to join other teams of developers to create magic?
          </span>
          <button
            type="button"
            className="animation block mx-auto bg-orange-600 p-2 my-4 shadow-lg shadow-orange-500 text-white rounded-lg font-medium lg:mx-0"
          >
            Start Now
          </button>
        </article>
        <div className="w-72 h-72 relative mx-auto my-4 rounded-full bg-gradient-to-br from-orange-50 to-orange-600 lg:mx-0">
          <img
            src={manImage}
            className="w-full h-full object-cover absolute bottom-20 inset-x-4"
            alt="man pointing up"
          />
        </div>
      </div>
      <h3 className="titleHead text-2xl text-center">
        Grab these exciting offers and apply now
      </h3>
      <div className="w-1/6 mx-auto py-4 flex justify-between items-center">
        <span className="titleHead text-center">Part Time</span>
        <button type="button">
          <ToggleOn sx={{ color: 'rgb(234 88 12)' }} />
        </button>
        <span className="text-center text-orange-600 font-semibold">
          Full Time
        </span>
      </div>
      <div className="containerWidth grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {offers.map((item) => (
          <JobTemp key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Companies
