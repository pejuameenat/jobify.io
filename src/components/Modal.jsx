import { useGLobalContext } from '../context'

const Modal = () => {
  const { showModal, closeModalFunc, mode } = useGLobalContext()
  return (
    <section
      className={showModal ? 'fixed inset-y-0 inset-x-0 overlay' : 'hidden'}
      onClick={closeModalFunc}
    >
      <div
        className={
          mode
            ? 'text-slate-800 rounded-sm  bg-slate-100 max-w-xl p-5 mx-auto relative inset-y-14 smoothTransition '
            : 'rounded-sm  bg-slate-100 max-w-xl p-5 mx-auto relative inset-y-14 smoothTransition'
        }
      >
        <button className="float-right text-xl" onClick={closeModalFunc}>
          &times;
        </button>
        <h2 className="titleHead text-3xl leading-relaxed">
          Open your account in <br />
          just{' '}
          <span className="bg-orange-600 p-2 mx-auto skew-x-1">5 minutes</span>
        </h2>
        <form className="grid grid-cols-3 py-8 gap-4">
          <label>First Name</label>
          <input type="text" className="modal-inputs" />
          <label>Last Name</label>
          <input type="text" className="modal-inputs" />
          <label>Email Address</label>
          <input type="email" className="modal-inputs" />
        </form>
        <button className="orangeButtons mx-auto hoverState">
          Next step &rarr;
        </button>
      </div>
    </section>
  )
}

export default Modal
