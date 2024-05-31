import womanSmiling from '../assets/womansmiling.jpg'
import Testimonies from './Testimonies'
const TestimonySection = () => {
  return (
    <section id="post a job">
      <div className="containerWidth py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-5 items-center">
          <div className=" w-96 h-80 p-3 mx-auto border border-orange-300 rounded-lg">
            <img
              src={womanSmiling}
              className="h-full object-cover"
              alt="A smiling woman"
            />
          </div>
          <article className="text-center lg:text-left">
            <h3 className="titleHead text-3xl">
              Over 10,000+ Talented People Registered On Our Website
            </h3>
            <p className="py-4">
              There are many variations of passages of services available but
              the majority have suffered alteration
            </p>
            <button
              type="button"
              className="orangeButtons hover:opacity-80 transition duration-500"
            >
              Explore More
            </button>
          </article>
        </div>
        <Testimonies />
      </div>
    </section>
  )
}

export default TestimonySection
