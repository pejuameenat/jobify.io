const Testimony = ({ img, span, name, info }) => {
  return (
    <article className="shadow-lg p-3 text-center my-10 rounded-md">
      <img
        src={img}
        className="w-10 h-10 object-cover rounded-full block mx-auto"
        alt=""
      />
      <h4 className="titleHead">{name}</h4>
      <em className="text-sm">{span}</em>
      <p className="text-sm py-4">{info}</p>
    </article>
  )
}

export default Testimony
