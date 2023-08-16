import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";


export default function Form() {
  const [familyMembers, setFamilyMembers] = useState("");
  const [youngestAge, setYoungestAge] = useState("");
  const [oldestAge, setOldestAge] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();

    
    if (familyMembers && youngestAge && oldestAge && /^\d+$/.test(familyMembers) && /^\d+$/.test(youngestAge) && /^\d+$/.test(oldestAge)) {
     
      console.log("Form submitted!");
      //API call here
    } else {
      
      console.log("Please fill in all fields");
   
    }
  };

  const isFormValid = familyMembers && youngestAge && oldestAge && /^\d+$/.test(familyMembers) && /^\d+$/.test(youngestAge) && /^\d+$/.test(oldestAge);

  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1 className="text-4xl py-4 text-center">
            Let us know something about you!
          </h1>

          <form className="w-4/5 mx-auto py-8" onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="family_members"
                id="family_members"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: "#888888" }}
                value={familyMembers}
                onChange={(e) => setFamilyMembers(e.target.value)}
                required
              />

              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                How many members are there in your family?
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="youngest_age"
                id="youngest_age"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: "#888888" }}
                value={youngestAge}
                onChange={(e) => setYoungestAge(e.target.value)}
                required
              />

              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Mention the age of the youngest member in your family.
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="oldest_age"
                id="oldest_age"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: "#888888" }}
                value={oldestAge}
                onChange={(e) => setOldestAge(e.target.value)}
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Mention the age of the oldest member in your family.
              </label>
            </div>
            <Link href={"/Customer"}>
              <button
                type="submit"
                className="text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={!isFormValid}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
