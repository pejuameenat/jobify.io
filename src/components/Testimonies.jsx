import { useGLobalContext } from '../context'
import Testimony from './Testimony'

const Testimonies = () => {
  const { testimonies } = useGLobalContext()
  return (
    <section className="py-20">
      <h3 className="titleHead text-center text-2xl">
        What Job Holders Says About Us
      </h3>
      <p className="text-center p-4 max-w-screen-sm mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero
        reiciendis quo earum ullam error debitis quae ipsam repellat quisquam?
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonies.map((item) => (
          <Testimony key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Testimonies
