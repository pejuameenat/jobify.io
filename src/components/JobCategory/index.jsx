import manImage from '../../assets/manpointing.png'
import { ToggleOff, ToggleOn } from '@mui/icons-material'
import { useGLobalContext } from '../../context'
import JobTemp from './JobTemp'
const Companies = () => {
  const {
    offerFullTime,
    offerPartTime,
    schedule,
    setSchedule,
    openModalFunc,
    mode,
  } = useGLobalContext()
  return (
    <section id="category">
      <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col justify-between gap-20 items-center lg:flex-row lg:gap-0 ">
        <article className="text-center lg:text-left">
          <h3 className="titleHead text-3xl ">
            500+ World Top company Posted their jobs
          </h3>
          <span className="font-light text-md py-3">
            Are you ready to follow our lead to join other teams of developers
            to create magic?
          </span>
          <button
            type="button"
            className="animation orangeButtons"
            onClick={openModalFunc}
          >
            Start Now
          </button>
        </article>
        <div className="w-72 h-72 relative mx-auto my-4 rounded-full bg-gradient-to-br from-orange-50 to-orange-600 lg:mx-0">
          <img
            src={manImage}
            className="w-full h-full object-cover absolute bottom-20 inset-x-4"
            alt="image of a man pointing up"
          />
        </div>
      </div>
      <h3 className="titleHead text-2xl text-center">
        Grab these exciting offers and apply now
      </h3>
      <div className="w-2/6 lg:w-1/6 mx-auto py-4 flex justify-between items-center">
        <span className={mode ? 'text-slate-50' : 'titleHead'}>Part Time</span>
        <button
          type="button"
          onClick={() => setSchedule((prevSchedule) => !prevSchedule)}
        >
          {schedule ? (
            <ToggleOn sx={{ color: '#ea580c' }} />
          ) : (
            <ToggleOff sx={{ color: '#172554' }} />
          )}
        </button>
        <span className="text-center text-orange-600 font-semibold">
          Full Time
        </span>
      </div>
      {schedule ? (
        <div className="containerWidth grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offerFullTime.map((item) => (
            <JobTemp key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="containerWidth grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offerPartTime.map((item) => (
            <JobTemp key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Companies
