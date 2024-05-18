import manImage from '../src/assets/manpointing.jpg'
const Companies = () => {
  return (
    <section>
      <div className="">
        <article className="text-center">
          <h3 className="titleHead ">
            500+ World Top company Posted their jobs
          </h3>
          <span className="">
            Ready to join other teams of developers to create magic?
          </span>
          <button type="button" className="block">
            Start Now
          </button>
        </article>
        <div className="relative bg-gradient-to-br from-orange-50 to-orange-300 to-orange-600 rounded-full">
          <img src={manImage} className="" alt="man pointing up" />
        </div>
      </div>
    </section>
  )
}

export default Companies
