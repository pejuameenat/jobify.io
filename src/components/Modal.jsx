import { useGLobalContext } from "../context"

const Modal = () => {
  const {showModal, setShowModal} = useGLobalContext()
  return (
    <section
      className={
        showModal
          ? 'fixed inset-y-0 inset-x-0 overlay'
          : 'hidden'
      }
    >
      <div className="  bg-slate-100 max-w-xl p-5 mx-auto relative inset-y-14">
        <button className="float-right text-xl" onClick={()=>setShowModal(false) }>&times;</button>
        <h2 className="titleHead text-3xl leading-relaxed">
          Open your account in <br />
          just <span className="bg-orange-600 p-2 mx-auto">5 minutes</span>
        </h2>
        <form className="grid grid-cols-3 py-8 gap-4">
          <label>First Name</label>
          <input type="text" className="modal-inputs" />
          <label>Last Name</label>
          <input type="text" className="modal-inputs" />
          <label>Email Address</label>
          <input type="email" className="modal-inputs" />
        </form>
        <button className="block bg-orange-600 p-2 mx-auto rounded-3xl">
          Next step &rarr;
        </button>
      </div>
    </section>
  )
}

export default Modal
