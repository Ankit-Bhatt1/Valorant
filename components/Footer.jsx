import React from 'react'
import{Anton} from '@next/font/google'
import { Raleway } from '@next/font/google'
const raleway = Raleway({subsets:['latin'], weight:'400'})
const anton = Anton({subsets:['latin'], weight:'400'})
import Image from 'next/image';

const Footer = () => {
  return (
    <>
    <div className='border-t-2  border-cyan-950 p-2'>
    <div  className={'text-center tracking-widest text-lg ' + anton.className }>
      <span>
        GO TO OFFICAL 
        <a className='cursor-pointer valorant-gradient px-1 hover:text-black font-valorant ' href='https://playvalorant.com/en-us/?gad_source=1&gclid=CjwKCAjw6JS3BhBAEiwAO9waF6ZGJF48vuacdJ_7z0TgeVOxqAwbm22yxZU_fqk6wl4olx99yzcwcBoCiWgQAvD_BwE&gclsrc=aw.ds'>
          VALORANT 
        </a>
        PAGE
      </span>
    </div>
    <div className={'flex flex-wrap justify-center ' + raleway.className}>
      <span className='flex justify-center'>
        Made by  Ankit
      </span>
      <a href='https://github.com/Ankit-Bhatt1/Valorant'>
      <Image className='cursor-pointer -mt-1 hover:opacity-60 duration-200 ' src={'/images/git.png'} width={30} height={5} priority></Image>
      </a>
    </div>
    </div>
    </>
   
   
  )
}

export default Footer