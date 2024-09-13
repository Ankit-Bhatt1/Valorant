import React from 'react';
import{Anton} from '@next/font/google'
const anton = Anton({subsets:['latin'], weight:'400'})
import { Roboto } from '@next/font/google';
const roboto = Roboto({subsets:['latin'],weight:'300'})
const Header = () => {
  return (

    <>
    
      <div className="container mx-auto flex justify-between items-center px-5 py-3 ">
      <div>
            <h1>
                LOGO
            </h1>
        </div>
        <nav>
          <ul className={"flex justify-end gap-10 tracking-[5px] "+ roboto.className}>
            <li>
              <a href="/" className='hover:text-red-700 duration-100 '>Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      </>
  );
};

export default Header;