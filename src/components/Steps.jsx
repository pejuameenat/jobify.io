import { useGLobalContext } from '../context'
import Step from './Step'
const Steps = () => {
  const { steps, mode } = useGLobalContext()
  return (
    <section id="about">
      <article className="text-center py-8 max-w-3xl mx-auto">
        <span className="text-orange-500 text-xs font-semibold">
          How it Works
        </span>
        <h3 className={'titleHead lg:text-2xl'}>
          Follow Easy 4 Steps
        </h3>
        <p
          className={
            mode
              ? 'text-slate-50'
              : 'text-blue-950 font-thin text-sm py-2 lg:text-lg'
          }
        >
          There are many variations of job packages available but the majority
          are lorem ipsum dolor sit amet sit emet dolor valor..
        </p>
      </article>
      <div className="containerWidth grid sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
        {steps.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </div>
    </section>
  )
}

export default Steps
