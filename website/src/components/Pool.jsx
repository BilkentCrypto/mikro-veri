import React from 'react'
import Typed from 'react-typed'
import PswImg from '../assets/password.png';
import data from '../newData/newData.json'
import ListElement from './ListElement';

const Pool = () => {

    const listElements = data.map( (element) => {
        return(<ListElement veriTuru={element.veriTuru} veriIcerigi={element.veriIcerigi} key={element.veriTuru}/>);
    } )

    return (
        <section
            id='pools'
            className='lg:h-[75vh] w-full flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    <div className='flex-1  flex flex-col items-center lg:items-start'>
                        <div className="flex flex-col">

                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Product name
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Color
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Category
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Price
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listElements}

                                    
                                    </tbody>
                                </table>
                            </div>



                        </div>


                    </div>

                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent text-md mb-[22px]'>

                        </p>
                        <h1 className='text-4xl leading-[44px] md:text-4xl text-white md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
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

export default Pool

