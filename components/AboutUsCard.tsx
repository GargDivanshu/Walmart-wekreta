import {teamData} from "../utilities/data";
import Image from "next/image";

export const Aboutuscard =()  => {
  return (
    <>
      {teamData.map((data) =>(
          
      <div className="text-center bg-purple-100 rounded-3xl p-7">
        <Image
          src={`/reviews/${data.image}.svg`} 
          alt="Team"
          width="210"
          height="210"
          className="rounded-full mx-auto w-48 md:w-60 mb-4"
        
        />

        <div className="text-xl">{data.name}</div>
        <div className="text-xl">Team Hashiras</div>

        <div className="mt-6">{data.description} </div>
      </div>
      ))}
    </>

  );
}
