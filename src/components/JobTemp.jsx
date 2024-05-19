const JobTemp = ({cashIcon, title, likeIcon, icon, span, contact, locationIcon, location,  color,borderColor }) => {
  return (
    <div
      className={`border ${borderColor} rounded-md py-7 px-3 shadow-xl shadow-gray-200`}
    >
      <span className="block text-center">{icon}</span>
      <h4 className="titleHead text-center">{title}</h4>
      <em className="block text-center text-sm">{span}</em>
      <div className="offerFlex py-2">
        <span className="text-gray-400">{cashIcon}</span>
        <p>{contact}</p>
      </div>
      <div className="offerFlex">
        <span className="text-gray-400">{locationIcon}</span>
        <p className="">{location}</p>
      </div>
      <button
        type="button"
        className={`likeButton rounded-full ${color}`}
      >
        {likeIcon}
      </button>
      <button
        type="button"
        className={`likeButton ml-4 rounded-3xl w-32 ${color} `}
      >
        Apply now
      </button>
    </div>
  )
}

export default JobTemp
