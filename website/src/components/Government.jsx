import React from 'react'
import Typed from 'react-typed'
import PswImg from '../assets/password.png';
import data from '../newData/newData.json'
import ListElement from './ListElement';
import {useState} from 'react'
import { FaBullseye } from 'react-icons/fa';
import QRCode from 'react-qr-code';






const Government = () => {
    const handleVerify = () => {
        setShowModal(false);

    }
    const [showModal, setShowModal] = React.useState(false);


    const listElements = data.map( (element) => {
        return(<ListElement veriTuru={element.veriTuru} veriIcerigi={element.veriIcerigi} key={element.veriTuru}/>);
    } )

    return (
        <section
            id='pools'
            className=' w-full h-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container w-full mx-auto'>
                <div className='flex  grid md:grid-cols-2  items-center pt-8'>
                    <div className='flex-1  flex flex-col items-center lg:items-start'>
                        <div className="flex flex-col">

                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xl text-black uppercase bg-white  ">
                                        <tr>
                                    
                                            <th scope="col" class="py-3 px-6">
                                                Verİ Türü
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Verİ İÇERİĞİ
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listElements}

                                    
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <button onClick={() => setShowModal(true)} className=' inline-block w-full py-4 my-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl'>Verileri Değiştir</button>    
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent text-md mb-[22px]'>

                        </p>
                        <h1 className='text-4xl leading-[44px] md:text-4xl text-white md:leading-tight text-lg text-center lg:text-left lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                            Verisi değişmiş bir vatandaş hakkındaki bilgileri değiştirebilirsiniz. <br />
                        </h1>

                        <p className='pt-4 pb-8 md:pt-6 text-gray-400 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            Vatandaşların bilgilerini kolay bir şekilde güncelleyebilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Government
