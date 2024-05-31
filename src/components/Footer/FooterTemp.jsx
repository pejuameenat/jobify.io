
const FooterTemp = ({h5, list1, list2, list3,list4}) => {
   
  return (
    <div className="text-white py-2">
      <h5 className="text-slate-600 font-semibold text-sm">{h5}</h5>
      <ul className="">
        <li className="list-elements">
          <a href="#">{list1}</a>
        </li>
        <li className="list-elements">
          <a href="#">{list2}</a>
        </li>
        <li className="list-elements">
          <a href="#">{list3}</a>
        </li>
        <li className="list-elements">
          <a href="#">{list4}</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterTemp
