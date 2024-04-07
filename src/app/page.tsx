"use client";
import {FormEvent, useEffect, useRef, useState} from "react";

export default function Home() {
  const [firstname , setFirstName] = useState<string>();
  const [lastname , setLastName] = useState<string>();
  const [Sdcode , setSdcode] = useState<string>();
  const [grade , setGrade] = useState<string>();
  const [Sdclass , setSdclass] = useState<string>();

  const refFirstName = useRef<HTMLInputElement>(null);
  const refLastName = useRef<HTMLInputElement>(null);
  const refSd_code = useRef<HTMLInputElement>(null);
  const refGrade = useRef<HTMLInputElement>(null);
  const refSd_class = useRef<HTMLInputElement>(null);



  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFirstName(refFirstName.current?.value);
    setLastName(refLastName.current?.value);
    setSdcode(refSd_code.current?.value);
    setGrade(refGrade.current?.value);
    setSdclass(refSd_class.current?.value);
  }



  return (
    <main className="flex flex-col justify-center items-center min-h-svh">
      <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
        <label className="text-white" htmlFor="fname">First name:</label>
        <input type="text" 
          name="fname" 
          ref={refFirstName} 
          required={true} 
          placeholder="First name"/>
        <label className="text-white" htmlFor="lname">Last name:</label>
        <input type="text"
          name="fname" 
          ref={refLastName} 
          required={true} 
          placeholder="Last name"/>

        <label className="text-white" htmlFor="lname">Student code:</label>
        <input type="number"
          min="1"
          name="fname" 
          ref={refSd_code} 
          required={true} 
          placeholder="Student code"/>

        <label className="text-white" htmlFor="lname">Grade:</label>
        <input type="number"
          min="1"
          max="6"
          name="fname" 
          ref={refGrade} 
          required={true} 
          placeholder="Grade"/>

        <label className="text-white" htmlFor="lname">Class:</label>
        <input type="number"
          min="1"
          max="14"
          name="fname"
          ref={refSd_class} 
          required={true} 
          placeholder="Class"/>

        <button className="text-white" type="submit">Send</button>
      </form>

    <div>
      Result: {firstname} {lastname} {Sdcode} {grade} {Sdclass} 
    </div>
    </main>
  );
}
