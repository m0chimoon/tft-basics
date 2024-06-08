import { Link } from 'react-router-dom'
import tftlogo from '../../assets/tftbasics.png'

const Header = () => {
  return (
    <header className='flex w-[1280px] items-center py-1 uppercase'>
    <img className='max-w-[96px] max-h-[96px]' src={tftlogo}/>
    <ul className='flex gap-10 px-6'>
      <li>
        <Link to='/introduction'>introduction</Link>
      </li>
      <li>
        <Link to='/set'>set</Link>
      </li>
      <li>
        <Link to='/comps'>comps</Link>
      </li>
      <li>
        <Link to='/augments'>augments</Link>
      </li>
      <li>
        <Link to='/items'>items</Link>
      </li>
   </ul>
  </header>
 )
}

export default Header