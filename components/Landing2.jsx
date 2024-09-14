import React from 'react'
import Image from 'next/image'
import{Anton} from '@next/font/google'
import { Raleway } from '@next/font/google'
const raleway = Raleway({subsets:['latin'], weight:'400'})
const anton = Anton({subsets:['latin'], weight:'400'})
const Landing2 = () => {
  return (
    <>
    <span>
        <h1 className='text-3xl m-5 p-5' >THE LATEST</h1>
    </span>
    <div class='flex justify-around mb-10'>
        <div class=" w-[450px] h-[450px] ">
            <div class=" flex flex-col h-[250px] items-center hover:scale-95 duration-200 cursor-pointer shadow-lg shadow-black ">
                <Image
                src={'/images/Vice.png'}
                width={450}
                height={50}
                priority
                alt="Vice"
                >

                </Image>
            </div>
                <div class={" h-[80px] " + raleway.className}>
                    <div className='text-2xl p-2 m-1'>ALL PATHS END HERE // Vyse 
                    Agent Trailer - VALORANT  </div>
                </div>
                <div class={" h-[100px] "+raleway.className}>
                    <div className='text-lg p-1 m-1 '>
                    All paths end with Vyes-lethal tatician, metal manipulator, 
                    and the newest Sentinel Agent in Valorant
                    </div>
                 </div>
        </div>
       

        <div class=" w-[450px] h-[450px] ">
            <div class=" flex flex-col h-[250px] items-center hover:scale-95 duration-200 cursor-pointer shadow-lg shadow-black ">
                <Image
                src={'/images/Vice2.png'}
                width={450}
                height={50}
                priority
                alt="Vice"
                >

                </Image>
            </div>
                <div class={" h-[50px] " + raleway.className}>
                    <div className='text-2xl p-2 m-1'>Vyse Gameplay Reveal Trailer   </div>
                </div>
                <div class={" h-[100px] "+raleway.className}>
                    <div className='text-lg p-2 '>
                    See the master tatician Vyse in action before she launches in episode 09. Act II
                    </div>
                 </div>
        </div>
      

        <div class=" w-[450px] h-[450px] ">
            <div class=" flex flex-col h-[250px] items-center hover:scale-95 duration-200 cursor-pointer shadow-lg shadow-black ">
                <Image
                src={'/images/Vice3.png'}
                width={450}
                height={50}
                priority
                alt="Vice"
                >

                </Image>
            </div>
                <div class={" h-[80px] " + raleway.className}>
                    <div className='text-2xl p-2 m-1'>Ascension Tickes: Come to the event in Monterrey! </div>
                </div>
                <div class={" h-[100px] "+raleway.className}>
                    <div className='text-lg p-2 m-1 '>
                    This Mexican city will welcome hundreds of VALORANT fans. You can be one of them
                    </div>
                 </div>
        </div>

    
    </div>

    <div className=' h-[600px] flex gap-10 mb-10 '>
        
        <div className=' w-[500px] ht-[500px] champion-bg shadow-xl shadow-black '>
        
        </div>
        <div className=' flex-auto w-[500px] ht-[500px] items-end '>
        <span className={'text-[100px] tracking-widest block m-5  '+anton.className}>WE ARE</span>
        <span className={'text-[100px] tracking-widest block m-5 '+anton.className}> VALORANT</span>
        <span className={'text-lg tracking-widest block font-extrabold m-5  '+raleway.className}>DEFY THE LIMITS</span>
        <span className={'text-lg tracking-widest block m-5 '+raleway.className}>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</span>
        </div> 
</div>

    <div className='flex justify-around mb-10 ml-[400px] download-bg '>
        <div className=' w-[1000px] h-[500px] content-evenly '>
            
        {/* <Image
        src={'/images/download.jpg'}
        height={544}
        width={800}
        priority
        >
        </Image> */}
        <div className={'text-lg w-[150px] h-[60px] bg-slate-800 text-white p-5 px-5 hover:bg-white hover:text-black duration-200 cursor-pointer ml-[100px] '+ raleway.className} >
            DOWNLOAD
        </div>
        </div>
        
    </div>

   
    </>
  )
}

export default Landing2