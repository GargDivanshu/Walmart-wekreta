import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {MdOutlineDashboard} from 'react-icons/md'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'
import {TfiWorld} from 'react-icons/tfi'
import {CiFilter} from 'react-icons/ci'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineHome, AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineUser} from 'react-icons/ai'


const Enterprise = () => {

    const [vendorOptions, setVendorOptions] = useState(false);
  return (
    <div className="min-h-screen max-h-content text-[#A2A4A5]"
    >
        <Navbar />

        <div className="flex h-screen border-b-[1px] border-black min-h-fit">
        {/* sidebar starts */}
        <div className="w-1/4 border-r-[1px] border-r-black relative">
            <div className="relative h-[75px] text-center text-2xl items-center my-auto">
                <span className="absolute top-0 bottom-0 left-0 right-0 m-auto font-bold mt-4 text-black">WeKreta</span>
            </div>

            <div className="text-sm mx-auto text-center flex w-3/5">
            {/* <MdOutlineDashboard 
            classNam="my-auto mx-4"
            fontSize={20}/> */}
                DASHBOARD
            </div>

            <div className="justify-center my-8 mx-auto flex-col flex items-center">
                <button className="hover:text-[#1f2532] text-[#3e485e] text-sm my-4 py-2 w-3/5 rounded-md hover:outline-1 hover:bg-slate-400/10 hover:shadow-md border-[1px] border-black">
                    Home
                </button>

                <button 
                onClick={() => setVendorOptions(!vendorOptions)}
                className="text-[#3e485e] hover:text-[#1f2532] text-sm text-center flex my-4 px-3 py-2 w-3/5 items-center rounded-md hover:outline-1 hover:bg-slate-400/10 hover:shadow-md border-[1px] border-black">
                    Vendor Options 
                    {(vendorOptions) ? 
                    <BiSolidUpArrow fontSize={10}
                    className="my-auto mx-1"
                    /> : 
                    <BiSolidDownArrow fontSize={10}
                    className="my-auto mx-1" 
                    />}
                </button>

                {
                    (vendorOptions) ? <div className="grid grid-cols-1 animate translate-y-3 transition ">
                        <span className="text-sm py-2 flex text-[#3e485e] hover:text-[#1f2532] hover:cursor-pointer"> 
                        <AiOutlineUserAdd fontSize={15} className="my-auto mt-1 mx-2 "/>
                        Add vendor</span>
                        <span className="text-sm py-2 flex text-[#3e485e] hover:text-[#1f2532] hover:cursor-pointer">
                        <AiOutlineUserDelete fontSize={15} className="my-auto mt-1 mx-2"/>
                            Remove vendor</span>
                        <span className="text-sm py-2 flex text-[#3e485e] hover:text-[#1f2532] hover:cursor-pointer">
                        <AiOutlineUser fontSize={15} className="my-auto mt-1 mx-2"/>
                            Edit vendor</span>
                    </div> : null
                }

                <button className="hover:text-[#1f2532] text-[#3e485e] text-sm my-4 py-2 w-3/5 rounded-md hover:outline-1 hover:bg-slate-400/10 hover:shadow-md border-[1px] border-black">
                    Statistics
                </button>
            </div>

            <div className="p-4 absolute bottom-0 border-t-[1px] border-black w-full grid grid-cols-3 justify-items-center">
                <TfiWorld className="text-black" fontSize={20}/>
                <CiFilter className="text-black" fontSize={20}/>
                <FiLogOut className="text-black" fontSize={20}/>
            </div>
        </div>
        {/* sidebar ends */}

        <div className="text-black m-8 w-full justify-items-center flex flex-col relative mt-12 min-h-fit">
            <span className="text-center text-4xl mx-auto h-fit w-4/5">
                Join with us and take your enterprise to new level!
            </span>

            <span className="text-sm font-bold text-black text-center mx-auto my-2">
                Trusted by vendors and Homemakers alike, are you ready to take your business to the next level?
            </span>
            
            <button className="max-w-fit mx-auto hover:text-[#1f2532] text-[#3e485e] text-sm my-4 p-2 w-3/5 rounded-md hover:outline-1 hover:bg-slate-400/10 hover:shadow-md border-[1px] border-black">
                Enterprise Login
            </button>

           <img 
           className="w-[450px] aspect-auto mx-auto pb-10"
           src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/ppc/ecommerce/hero-large-ae50b5b2773d8c345a5b0b785bb4f5bd0590aebdccc5d3c0d1e39eaa7c932a52.png?quality=50"/>
        </div>

        </div>
        </div>
  )
}

export default Enterprise