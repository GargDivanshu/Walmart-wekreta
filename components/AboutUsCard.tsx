import {teamData} from "../utilities/data";
import Image from "next/image";

export const Aboutuscard =()  => {
  return (
    <>
      {teamData.map((data,index) =>(
          
      <div key={index} className="text-center relative bg-purple-100 rounded-3xl p-7">
        <Image
          src={`/reviews/${data.image}`} 
          alt="Team"
          width="150"
          height="150"
          className="rounded-full aspect-square object-cover mx-auto w-44 mb-4"
        
        />

        {/* <div className="text-xl absolute top-36 text-right  w-full left-5 font-semibold underline -rotate-90 -translate-x-1/2">{data.name}</div> */}
        <div className="text-xl font-semibold">{data.name}</div>
        {/* <div className="text-xl">Team Hashiras</div> */}

        <div className="mt-3">{data.description} </div>
      </div>
      ))}
    </>

  );
}
