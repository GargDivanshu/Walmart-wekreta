import Head from "next/head";
import Image from "next/image";
import UpdateCart from "../../components/UpdateCart";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Leaderboard from "../../components/Leaderboard";
import LocateCustomer from "../../components/LocateCustomer.js";
import { useState } from 'react';
import Vendor from "../../models/Vendor";
import Reviews from "../../models/Reviews";
import {useRouter} from "next/router";
import mongoose from "mongoose";
import ReviewsForVendor from "@/components/ReviewsForVendor";

export default function Slug({Users, reviews}) {
  const [component, setcomponent] = useState('locate customer')
  console.log(component);

  const router = useRouter();
  const { slug } = router.query;

  console.log(reviews + " my reviews");


  return (
    <>
      <Head>
        <title>WEkreta™</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-x-hidden">
        <Navbar />

        <div className="flex z-0 relative">
        <Sidebar component={setcomponent} Users={Users} />
        { (component === 'leaderboard') ? <Leaderboard /> : null}
        {(component === 'locate customer' || component==='') ? <LocateCustomer /> : null}
        {(component === 'update' || component==='') ? <UpdateCart /> : null}
        {(component === 'reviews' || component==='') ? <ReviewsForVendor reviews={reviews} /> : null}
        </div>
        <div>





      </div>
        
      </div>
      {/* main hero section starts */}
    </>
  );


}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }

  let Users = await Vendor.findOne({ phone: context.query.slug });

  const reviews = await Reviews.find({ vendornumber: Users._id });
  // console.log(JSON.parse(JSON.stringify(reviews)) + " console")
  return {
    props: {
      Users: JSON.parse(JSON.stringify(Users)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  };
}

