import React from 'react';
import{Anton} from '@next/font/google'
const anton = Anton({subsets:['latin'], weight:'400'})
import { Roboto } from '@next/font/google';
import Logo from './Logo';
const roboto = Roboto({subsets:['latin'],weight:'500'})

const Header = () => {
  return (
      <div>
        
        <ul className={'flex mt-5 mb-3 flex-wrap  '}>
          <ul>
            <li className='font-valorant mr-auto text-2xl ml-5 '>
              <Logo/>
            </li> 
          </ul>
          <ul className={'flex gap-[250px] mr-[60px] ml-auto flex-wrap '+ roboto.className}>
            <li>
              <button className='hover:'>AGENTS</button>
            </li>
            <li>
              <button>MAPS</button>
            </li>
            <li>
              <button>LINE-UPS</button>
            </li>
            <li>
              <button>NEWS</button>
            </li>
          </ul>
        </ul>
      </div> 
  );
};

export default Header;