import { useGLobalContext } from "../context"
import Testimony from "./Testimony"

const Testimonies = () => {
    const {testimonies} = useGLobalContext()
  return (
    <section>
        <h3></h3>
        <p></p>
        <div>
          {testimonies.map(item=> <Testimony key={item.id} {...item}/>)}  
        </div>
    </section>
  )
}

export default Testimonies