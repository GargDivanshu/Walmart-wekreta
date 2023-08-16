import Head from "next/head";
import Image from "next/image";
import UpdateCart from "../../components/UpdateCart";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Leaderboard from "../../components/Leaderboard";
import LocateCustomer from "../../components/LocateCustomer.js";
import { useState } from 'react';
import Vendor from "../../models/Vendor";
import {useRouter} from "next/router";
import mongoose from "mongoose";
import QRCode from "react-qr-code";


export default function Slug() {
  const [component, setcomponent] = useState('locate customer')
  console.log(component);

  const router = useRouter();
//   const { slug } = router.query;

  const Users = {
    firstName:'Divanshu',
    // lastName:Users.Users.lastName,
    phone:9354822945,
    _id:'user8363591xcc',
  }
  return (
    <>
      <Head>
        <title>WEkreta</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-x-hidden">
        <Navbar />

        <div className="flex z-0 relative">
        <aside className="w-[30vw]  relative h-full -z-20 " >
        <div className="overflow-y-auto  px-3 bg-gray-100 rounded border-r-4 py-6 border-black">
          {/* make sidebar in tailwind with profile */}
          <div className="flex flex-col items-center justify-between space-y-3">
            <div className="flex-shrink-0">
              <img
                className="h-[120px] w-[120px] rounded-full"
                src="/assets/man.png"
                alt="John"
              />
            </div>
            {/* basic info + qr */}
            <div className="flex flex-col gap-2 justify-between items-center">
           <h2 className="text-3xl font-semibold">{Users.firstName}</h2>
              <p className="text-xl">{Users._id}</p> 
              <p className="text-xl border-yellow-500 border-4 text-yellow-600 font-bold px-4 py-2 rounded-2xl my-2">Points : 689</p>
{/* Credits come from database */}




              {/* <img
                className="h-[170px] w-[170px] pt-2 "
                src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"
                alt="QR"
              /> */}
              {/* make a button */}
              <button className="bg-green-500 hover:bg-green-700 mt-3 text-white font-bold py-1 px-6 rounded">
                Share QR  
                <QRCode value="http://localhost:3000/ReviewForm" />
                <img src="/assets/share.png" className="inline ml-1 text-green-500 w-4 mb-1"/>
              </button>
            </div>
            {/* button options */}
            {/* make div with borders and text on left and button on right */}
            <div className="flex flex-col space-y-1 w-full px-2 justify-center items-center">
              <div 
              onClick={()=> {component('locate customer')}}
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 text-center w-full bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl w-full ">Locate your customer</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
              <div
              onClick={()=> {component('leaderboard')}} 
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 w-full text-center bg-white flex flex-row space-x-1 justify-between items-center">
                <p className="text-xl w-full">Leaderboard</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
              <div 
              onClick={(e)=> {component('update')}}
              className="border border-gray-300 rounded-md hover:bg-purple-300  cursor-pointer p-2 w-full bg-white flex flex-row space-x-1 justify-between items-center text-center">
                <p className="text-xl w-full">Update Cart</p>
                {/* <button className="border-blue-700 border hover:bg-blue-100 transition-all text-blue-500 font-bold py-1 px-6 rounded">
                  View
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </aside>
        { (component === 'leaderboard') ? <Leaderboard /> : null}
        {(component === 'locate customer' || component==='') ? <LocateCustomer /> : null}
        {(component === 'update' || component==='') ? <UpdateCart /> : null}
        </div>
      </div>
      {/* main hero section starts */}
    </>
  );


}

// export async function getServerSideProps(context) {
//   if(!mongoose.connections[0].readyState){
  

//   await mongoose.connect(process.env.MONGO_URL)
//   }

//   let Users = await Vendor.findOne({phone:context.query.slug});

//   return {
     
//     props: {Users:JSON.parse(JSON.stringify(Users))},
//   }
// }
