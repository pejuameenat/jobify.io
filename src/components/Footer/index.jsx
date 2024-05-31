import { useGLobalContext } from '../../context'
import FooterTemp from './FooterTemp'
const Footer = () => {
  const { footerList } = useGLobalContext()
  return (
    <footer className="bg-slate-900">
      <div className="containerWidth">
        <div className="bg-orange-600 w-10/12 rounded-lg lg:w-3/6 h-20 mx-auto p-3 relative top-10">
          <div className="bg-amber-400 w-16 h-16 rounded-br-full rounded-tl-3xl absolute top-0 left-0 -z-1"></div>
          <p className="text-white text-center">
            Lets get connected and start finding your dream job
          </p>
        </div>
        <ul className='lg:flex justify-between py-14'>
          {footerList.map((item) => (
            <FooterTemp key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
