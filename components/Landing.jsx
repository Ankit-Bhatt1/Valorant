import React from 'react'
import{Anton} from '@next/font/google'
import { Raleway } from '@next/font/google'
import Asset from './Asset'

const raleway = Raleway({subsets:['latin'], weight:'200'})
const anton = Anton({subsets:['latin'], weight:'400'})

const Landing = () => {
  return (
    <>
    <div className='bg-red-500 '>
    .
    <div className={'w-[700px] h-[450px] m-10 p-5 bg-slate-200 rounded-[30px] '}>
           <ul className={'text-[100px] tracking-widest'} >
            <li className={anton.className}>
              WELCOME TO
            </li>
            <li className='valorant-gradient font-valorant '>
              VALORANT
            </li>
            <li className={anton.className}>
              INSIGHT
            </li>
           </ul>  
    </div>
    </div>
    </>
  )
}

export default Landing