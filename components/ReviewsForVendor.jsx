import React from 'react'

const ReviewsForVendor = (props) => {
  return (
    <div className='p-5 w-[70vw]'>
    <h1 className='text-black font-semibold text-3xl pb-5'>Recent Reviews</h1>
    <div className='grid grid-cols-3 gap-5'>
{Array.isArray(props.reviews) && props.reviews.length > 0 ? (
props.reviews.map((item) => (
 <div key={item._id} className='bg-green-500 p-5 py-3  rounded-3xl rounded-tl rounded-br grid items-center'>
  <h3 className='text-white text-lg'>{item.msg}</h3>
  {/* <h6 className='text-gray-100 text-right'>{item.name}</h6> */}
 </div> 
))
) : (
<p>No reviews available</p>
)}
</div>
</div>
  )
}

export default ReviewsForVendor
