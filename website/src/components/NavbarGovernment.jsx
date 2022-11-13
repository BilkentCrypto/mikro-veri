import React, {useState,useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsWallet} from 'react-icons/bs'
import {Lİnk} from 'react-scroll'
import Link from 'react-scroll/modules/components/Link'




function NavbarGovernment() {
  const[nav, setNav] = useState(true)
  const handleNev = () => {
        setNav(!nav)
  }
  
   
 


  return (
    <div className=' h-[90px] w-screen z-20 w-full text-white w-full bg-[#0C0D32]'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
          <h1 className='text-3xl p-10 font-bold bg-gradient-to-r from-[#0084F4] to-[#48E5FA] bg-clip-text text-transparent'>BilkentDEV</h1>
          
    
        <div className='hidden md:flex pr-6'>
          
          
            
             <button className=' border-none text-flex font-bold w-[220px] h-[40px] rounded-full hover:scale-105 duration-300 bg-gradient-to-r from-[#0084F4] to-[#F50FDE] text-white full-width mx-auto '>
          
               Cüzdana bağlan
            </button>
           
        </div>
      
       <div onClick={handleNev} className= 'md:hidden w-8 '>
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}

       </div>
        <div className={!nav ? 'fixed left-0 top-3 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-linear duration-500' : 'fixed left-[-100%] '}>
          <h1 className='w-full text-2xl font-bold text-[#ffffff] m-5'>BilkentDEV</h1>  
          <ul className='uppercase p-4'> 
           <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='p-5 font-semibold'><li className='p-4 border-b border-b-gray-400'><button className='hover:underline'>Home</button></li> </Link>
           <Link to="pools" spy={true} smooth={true} offset={50} duration={500} className='p-5 font-semibold'> <li className='p-4 border-b border-b-gray-400'><button className='hover:underline'>Pools</button></li></Link>
              <div className='md:flex mt-2 item-center'>
                
                 <button className='border-none text-flex font-bold w-[200px] h-[40px] rounded-full hover:scale-105 duration-300    bg-white to-pink-500 text-[#000000] full-width     mx-auto '>
          
                   Connect to a wallet
                </button>
              </div>       
           </ul> 
       </div>
     </div>
    </div>
  )
}

export default NavbarGovernment