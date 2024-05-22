
const Modal = () => {
  return (
    <section>
      <div className="">
        <button className="">&times;</button>
        <h2 className="">
          Open your bank account <br />
          in just <span class="highlight">5 minutes</span>
        </h2>
        <form className="">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className=" ">Next step &rarr;</button>
        </form>
      </div>
    </section>
  )
}

export default Modal