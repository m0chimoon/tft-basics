import { Link } from 'react-router-dom'
import tftlogo from '../../assets/tftbasicslogo.png'
import tfttextlogo from '../../assets/tftbasicslogotext.png'
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='flex justify-center items-center mb-14 py-1 uppercase text-lg font-semibold text-[#f6b03f]'>
       <Link to='/'>
        <img className='max-w-[96px] max-h-[96px] mx-4' src={tfttextlogo}/>
       </Link>
      <img className='max-w-[96px] max-h-[96px] py-2' src={tftlogo}/>

      <button className="uppercase md:hidden" onClick={handleOpenMenu}>menu</button>
      <Menu onClose={handleCloseMenu} show={showMenu}/>

      <ul className='flex gap-10 px-6 max-lg:text-base max-lg:gap-4 max-md:hidden'>
        <li className='hover:underline'>
          <Link to='/introduction'>introduction</Link>
        </li>
        <li className='hover:underline'>
         <Link to='/set'>set</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/comps'>planner</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/augments'>augments</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/items'>items</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/champions'>Champions</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header


interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Menu = ({ show, onClose }: ModalProps) => {
  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded shadow-md h-full w-full bg-opacity-80">
        <button onClick={onClose} className="text-white text-4xl font-bold text-end mb-5">&times;</button>
        <ul className='flex flex-col gap-5 px-6 text-2xl'>
        <li className='hover:underline'>
          <Link to='/introduction'>introduction</Link>
        </li>
        <li className='hover:underline'>
         <Link to='/set'>set</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/comps'>planner</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/augments'>augments</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/items'>items</Link>
        </li>
        <li className='hover:underline'>
          <Link to='/champions'>Champions</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}
