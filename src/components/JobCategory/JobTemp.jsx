import { Favorite } from '@mui/icons-material'
import { useGLobalContext } from '../../context'

const JobTemp = ({
  id,
  cashIcon,
  title,
  icon,
  span,
  contact,
  locationIcon,
  location,
  color,
  borderColor,
  schedule,
}) => {
  const { like, toggleLike, currentItem, mode } = useGLobalContext()
  return (
    <div
      className={
        mode
          ? `border ${borderColor} rounded-md py-7 px-3 shadow-xl shadow-slate-800 text-center lg:text-left spect`
          : `border ${borderColor} rounded-md py-7 px-3 shadow-xl shadow-gray-200 text-center lg:text-left spect`
      }
    >
      <span className="block">{icon}</span>
      <h4 className="titleHead lg:text-center">{title}</h4>
      <em className="block text-sm lg:text-center">{span}</em>
      <span className="block text-sm lg:text-center">{schedule}</span>
      <div className="offerFlex py-2 justify-center">
        <span className="text-gray-400">{cashIcon}</span>
        <p>{contact}</p>
      </div>
      <div className="offerFlex justify-center lg:justify-normal">
        <span className="text-gray-400">{locationIcon}</span>
        <p className="">{location}</p>
      </div>
      <button
        type="button"
        className={` text-white p-2 mt-3 rounded-full ${color}`}
        onClick={() => toggleLike(id)}
      >
        <Favorite
          sx={{ color: like && id === currentItem ? '#be185d' : '#fafafa' }}
        />
      </button>
      <button
        type="button"
        className={`likeButton  ml-4 rounded-3xl w-32 ${color} `}
      >
        Apply now
      </button>
      <em
        className={
          like && id === currentItem
            ? 'block opacity-100 mt-1 bg-slate-400 w-fit h-6 px-1 rounded-md text-white duration-500 transition'
            : 'opacity-0'
        }
      >
        Saved!
      </em>
    </div>
  )
}

export default JobTemp
