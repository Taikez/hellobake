import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 md:h-32 px-4 sticky">
      <Link className="h-full" to="/">
        <img className="h-full" src={logo} alt="Logo" />
      </Link>
      <ul className="uppercase hidden md:flex">
        <li className="m-10 relative group">
          <Link to="/">
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[0.8px] bg-[#554a4a] transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="m-10 relative group">
          <Link to="/product">
            <span>Product</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[0.8px] bg-[#554a4a] transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="m-10 relative group">
          <Link to="/biography">
            <span>About Us</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[0.8px] bg-[#554a4a] transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="m-10 relative group">
          <a href="https://wa.link/8k7nd7">
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[0.8px] bg-[#554a4a] transition-all group-hover:w-full"></span>
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#fccccc] bg-[#ffdddd] ease-in-out duration-500 z-auto' : 'fixed left-[-100%] w-[60%] h-full top-0 ease-in-out duration-500'}>
      <Link className="h-32" to="/">
        <img className="h-32" src={logo} alt="Logo" />
      </Link>
        <ul className="p-4 uppercase">
          <li className="p-4 m-4 border-b border-b-[#cdb9b9]"><Link to="/">Home</Link></li>
          <li className="p-4 m-4 border-b border-b-[#cdb9b9]"><Link to="/product">Product</Link></li>
          <li className="p-4 m-4 border-b border-b-[#cdb9b9]"><Link to="/biography">About Us</Link></li>
          <li className="p-4 m-4"><a href="https://wa.link/8k7nd7">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar