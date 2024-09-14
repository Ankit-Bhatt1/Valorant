import React from 'react'
import{Anton} from '@next/font/google'
import { Raleway } from '@next/font/google'
import Asset from './Asset'
import Image from 'next/image'
import Login from './Login'
import Landing2 from './Landing2'

const raleway = Raleway({subsets:['latin'], weight:'200'})
const anton = Anton({subsets:['latin'], weight:'400'})

const Landing = () => {
  return (
    <>
    <div className={' flex justify-around' }>
      <div>
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
      <div className={'image-bg p-[150px] w-[100px] '}>
        
      </div>  
    </div>
    <div>
      <Landing2/>
    </div>
    </>
  )
}

export default Landing