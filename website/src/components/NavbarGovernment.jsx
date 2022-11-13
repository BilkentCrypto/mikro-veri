import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsWallet } from 'react-icons/bs'
//import {Lİnk} from 'react-scroll'
import { useWeb3React } from '@web3-react/core';
import { injected } from './injected';
import { ethers } from "ethers";
import { Web3ReactProvider } from '@web3-react/core';
import Link from 'react-scroll/modules/components/Link'


function NavbarGovernment() {
  const [nav, setNav] = useState(true)
  const handleNev = () => {
    setNav(!nav)
  }

  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>


      <div className=' h-[90px] w-screen z-20 w-full text-white w-full bg-[#0C0D32]'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <h1 className='text-4xl p-10 font-bold bg-gradient-to-r from-[#0084F4] to-[#48E5FA] bg-clip-text text-transparent'>MikroVeri</h1>


          <div className='hidden md:flex pr-6'>


            <button className=' border-none text-flex font-bold w-[220px] h-[40px] rounded-full hover:scale-105 duration-300 bg-gradient-to-r from-[#0084F4] to-[#F50FDE] text-white full-width mx-auto '
              onClick={() => {
                if (account) return;
                connect();
              }}
            >

              {account ? "Cüzdan bağlı" : "Cüzdana Bağlan"}{" "}
            </button>

          </div>


        </div>
      </div>
    </Web3ReactProvider>
  )
}

export default NavbarGovernment