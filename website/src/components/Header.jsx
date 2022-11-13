import React from 'react'
import Typed from 'react-typed'
import {
    FaGithub,
    FaDiscord,
    FaTelegramPlane,
    FaTwitterSquare,
} from 'react-icons/fa'
import PswImg from '../assets/password.png';



const Header = () => {
  return (
    <section
    id='home'
    className='lg:h-[75vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
  >
    <div className='container mx-auto h-full'>
      <div className='flex items-center h-full pt-8'>
        <div className='flex-1 flex flex-col items-center lg:items-start'>
          <p className='text-lg text-accent text-md mb-[22px]'>
          
          </p>
          <h1 className='text-4xl leading-[44px] md:text-4xl text-white md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            Verilerinizi <br />
          </h1>
          <Typed 
                className=' py-3 max-w[200px] text-7xl md:text-7xl bg-clip-text font-extrabold  text-transparent bg-gradient-to-r from-[#E07436] to-[#FBE84A]'
                  strings={['güvenli', 'hızlı', 'kolay']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
           <h1 className='text-4xl leading-[44px] md:text-4xl text-white md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              bir şekilde kanıtlayabilirsiniz. <br />
          </h1>      
          <p className='pt-4 pb-8 md:pt-6 text-gray-400 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Verilerinizin doğrulunu kanıtlamak için kişisel bilgierinizi paylaşmanıza gerek yok. X sayesinde verilerinizi üçüncü parti kuruluşlara paylaşmadan kanıtlayabilrsiniz.
          </p>
        </div>
        <div className='hidden lg:flex flex-1 justify-end items-end'>
          <img src={PswImg} className='max-w-xm h-auto' alt='' />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header
