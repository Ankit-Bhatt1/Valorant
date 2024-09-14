import React from 'react'
import { Raleway } from '@next/font/google'
import Link from 'next/link'
const raleway = Raleway({subsets:['latin'], weight:'500'})
const Login = () => {
  return (
    <div className=' flex flex-col  p-[100px]   '>
        <h1 className='text-center font-valorant text-2xl '>Login</h1>
        <input className={'border-[1px] max-w-full m-5 p-1 '+ raleway.className} placeholder='username'></input>
        <input className={'border-[1px] max-w-full m-5 p-1 '+ raleway.className} placeholder='password' type='password'></input>
        <span> Already a User ? <Link href={'/'} className='valorant-gradient hover:opacity-50 duration-200 '> Login </Link> </span> 
    </div>
  )
}

export default Login