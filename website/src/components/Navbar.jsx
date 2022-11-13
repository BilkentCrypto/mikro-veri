import React, {useState,useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsWallet} from 'react-icons/bs'
import {Lİnk} from 'react-scroll'
import Link from 'react-scroll/modules/components/Link'
import { Input } from "@material-tailwind/react";




function Navbar() {
  const[nav, setNav] = useState(true)
  const handleNev = () => {
        setNav(!nav)
  }
  const handleVerify = () => {
    setShowModal(false);

}
const [showModal, setShowModal] = React.useState(false);

  
   
 


  return (
    <div className=' h-[90px] w-screen z-20 w-full text-white w-full bg-[#0C0D32]'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
          <h1 className='text-3xl p-10 font-bold bg-gradient-to-r from-[#0084F4] to-[#48E5FA] bg-clip-text text-transparent'>BilkentDEV</h1>
          <ul className='md:flex hidden uppercase items-center gap-10'>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Ana Sayfa</button></Link>
            <Link to="pools" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Verilerim/Verileri Şifrele</button></Link>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Verileri Doğrula</button></Link>
         </ul>
        
    
        <div className='hidden md:flex pr-6'>
          
          
            
             <button onClick={() => setShowModal(true)} className=' border-none text-flex font-bold w-[220px] h-[40px] rounded-full hover:scale-105 duration-300 bg-gradient-to-r from-[#0084F4] to-[#F50FDE] text-white full-width mx-auto '>
          
               Giriş Yap
            </button>
           
        </div>
        {showModal ? (
        <>
          <div
            className="justify-center backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-center  text-black font-semibold">
                    Giriş Yap
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" for="phone">
                            T.C. Kimlik No
                        </label>
                        <Input className="shadow appearance-none border text-black rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="T.C. Kimlik No"/>
                </div>
                <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <Input className="shadow appearance-none text-black border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password"/>
                  </div>
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-green-500 border hover:text-white hover:bg-green-500 background-transparent border-green-500 hover:border-transparent rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleVerify}
                    
                    
                  >
                    Kayıt Ol
                  </button>
                  <button
                    className="text-red-500 border hover:text-white hover:bg-red-500 background-transparent border-red-500 hover:border-transparent rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleVerify}
                    
                    
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
       <div onClick={handleNev} className= 'md:hidden w-8 '>
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}

       </div>
        <div className={!nav ? 'fixed left-0 top-3 w-[50%] h-full border-r border-r-gray-900 bg-[#0C0D32] ease-linear duration-500' : 'fixed left-[-100%] '}>
          <h1 className='w-full text-2xl font-bold text-[#ffffff] m-5'>BilkentDEV</h1>  
          <ul className='uppercase p-4'> 
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Ana Sayfa</button></Link>
            <Link to="pools" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Verilerim/Verileri Şifrele</button></Link>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='py-7 px-1 inline-block font-bold text-white'><button className='hover:underline'>Verileri Doğrula</button></Link>
              <div className='md:flex mt-2 item-center'>
                
                 <button className='border-none text-flex font-bold w-[200px] h-[40px] rounded-full hover:scale-105 duration-300    bg-white to-pink-500 text-[#000000] full-width     mx-auto '>
          
                   Giriş Yap
                </button>
              </div>       
             
           </ul> 
       </div>
     </div>
    </div>
  )
}

export default Navbar