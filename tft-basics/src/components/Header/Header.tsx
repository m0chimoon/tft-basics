import { Link } from 'react-router-dom'
import tftlogo from '../../assets/tftbasicslogo.png'
import tfttextlogo from '../../assets/tftbasicslogotext.png'

const Header = () => {
  return (
    <header className='flex w-[1280px] items-center mb-12 py-1 uppercase text-lg font-semibold text-[#f6b03f]'>
       <Link to='/'>
        <img className='max-w-[96px] max-h-[96px] mr-1.5' src={tfttextlogo}/>
       </Link>
       
      <img className='max-w-[96px] max-h-[96px]' src={tftlogo}/>
      <ul className='flex gap-10 px-6'>
        <li className='hover:underline'>
          <Link to='/introduction'>introduction</Link>
        </li>
        <li className='hover:underline'>
         <Link to='/set'>set</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/comps'>comps</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/augments'>augments</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/items'>items</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header