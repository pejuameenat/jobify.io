const Step = ({img, title, info, color, radiusColor }) => {
  return (
    <div
      className={
        ` step-radius shadow-md rounded-2xl px-5 py-7 max-w-60 mx-auto border-l-2 ${radiusColor} hoverState`
      }
    >
      <span className={color}>{img}</span>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="font-light text-sm py-2">{info}</p>
    </div>
  )
}

export default Step