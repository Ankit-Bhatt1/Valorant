import React from 'react'
import{Anton} from '@next/font/google'
import { Raleway } from '@next/font/google'
import Asset from './Asset'

const raleway = Raleway({subsets:['latin'], weight:'200'})
const anton = Anton({subsets:['latin'], weight:'400'})

const Landing = () => {
  return (
    <div className={''}>
        <div className={' p-5 grid mt-[50px] tracking-wider text-[100px] '+ anton.className}>
            <span>WELCOME TO </span> 
            <span className=' valorant-gradient cursor-pointer duration-200 hover:text-[105px] '>VALORANT</span> 
            <span> GUIDES </span>
        </div>
        {/* <span className={'text-2xl ml-5 ' + raleway.className}>
        This website has all you need to master your valorant knowledge and skill
        </span> */}
    </div>
  )
}

export default Landing