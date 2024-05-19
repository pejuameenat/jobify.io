
const Testimony = ({ img, span, name,info}) => {
  return (
    <article>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <em>{span}</em>
      <p>{info}</p>
    </article>
  )
}

export default Testimony