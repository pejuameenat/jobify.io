import { useGLobalContext } from '../../context'
import helpImg from '../../assets/undraw_support.svg'
const Help = () => {
  const { help, mode } = useGLobalContext()
  return (
    <section id="help" className="py-14">
      <h3
        className={'titleHead text-center text-2xl'}
      >
        We are always happy to help with anything!
      </h3>
      <div className="containerWidth lg:grid grid-cols-2 gap-10 items-center">
        <img src={helpImg} className="max-w-full" alt="" />
        <article className="max-w-3xl mx-auto py-16 px-4">
          <div className="py-5">
            {help.map((item) => (
              <div key={item.id} className="flex gap-5 items-center">
                <span
                  className={`${item.bgColor} text-white p-2 rounded-xl shadow-lg`}
                >
                  {item.img}
                </span>
                <div>
                  <h5 className={ 'titleHead'}>
                    {item.title}
                  </h5>
                  <p
                    className={
                      mode
                        ? 'text-slate-300'
                        : 'text-blue-950 text-sm font-light py-2'
                    }
                  >
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Help
