import React from 'react'
import Typed from 'react-typed'
import PswImg from '../assets/password.png';
import data from '../newData/newData.json'
import ListElement from './ListElement';
import { useState } from 'react'
import { FaBullseye } from 'react-icons/fa';
import QRCode from 'react-qr-code';

import { generateMerkleTree, verifyMerkleTree, generateMerkleProof } from '../Cryptography/merkleTreeFunctions.js'
import {hashData} from '../Cryptography/dataGenerator.js';



const Proof = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedTicks, setSelectedTicks] = useState([]);
  const [qrData, setQrData] = useState();
  

  const handleClose = () => {
    setShowModal(false);

  }

  

  const handleVerify = () => {
    setShowModal(true);
    const hashedArray = dataArray.map( (value) => {
      return hashData(value)
    } )
    const proofData = hashedArray.map( (value, index) => {
      return{
        ...dataArray[index],
        //hashed: value,
        //merkleProof: { ...generateMerkleProof( merkleTree, value )}
        
      }
    } );
    setQrData(proofData)
  }


  const handleTick = (index) => {
    console.log("index", index);
    let newArray = selectedTicks.map((value) => {
      return value;
    })
    const indexOfIndex = newArray.indexOf(index)
    if (indexOfIndex > -1) {
      newArray.splice(indexOfIndex, 1)
    } else {
      newArray.push(index);
    }
    setSelectedTicks(newArray);
  }


  console.log("selectedTicks", selectedTicks)

  const dataArray = selectedTicks.map((value) => {
    return data[value];
  })

  console.log("data array", dataArray)

  const listElements = data.map((element, index) => {
    return (<ListElement handleClick={() => handleTick(index)} veriTuru={element.veriTuru} veriIcerigi={element.veriIcerigi} key={element.veriTuru} />);
  })

  return (
    <section
      id='pools'
      className=' w-full h-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container w-full mx-auto'>
        <div className='flex  grid md:grid-cols-2  items-center pt-8'>
          <div className='flex-1  flex flex-col items-center lg:items-start'>
            <div className="flex flex-col">

              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xl text-black uppercase bg-white  ">
                    <tr>

                      <th scope="col" className="py-3 px-6">
                        Verİ Türü
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Verİ İÇERİĞİ
                      </th>
                      <th scope="col" className="py-3 px-6">

                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listElements}


                  </tbody>
                </table>
              </div>
              <div>
                <button onClick={handleVerify} className=' inline-block w-full py-4 my-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl'>Verilerimi Şifrele</button>

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
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            QR
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">

                          <QRCode value={JSON.stringify(qrData)} />



                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 border hover:text-white hover:bg-red-500 background-transparent border-red-500 hover:border-transparent rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleClose}


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






            </div>


          </div>

          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>

            </p>
            <h1 className='text-4xl leading-[44px] md:text-4xl text-white md:leading-tight text-lg text-center lg:text-left lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Kanıtlamak istediğiniz verileri seçiniz ve şifrele butonuna basınız. <br />
            </h1>

            <p className='pt-4 pb-8 md:pt-6 text-gray-400 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Yan tarafta verileriniz gözükmektedir kanıtını sunmak istediğiniz bilgilerinizi seçip güvenli bir şekilde kanıtlayabilirsiniz.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof

