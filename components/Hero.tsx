import Image from 'next/image'
import { LuLinkedin } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { SiHackerrank } from 'react-icons/si'
import { AiFillGithub } from "react-icons/ai";
import { PiMouseScrollBold } from "react-icons/pi";

export default function Hero() {
  const birthDate = new Date(2004, 10, 12); 
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    
  }
  if (months < 0) {
    years--;
    
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
      <div className="flex justify-center">
        <Image
          src="/pranav.jpg"
          alt="N Pranav Tej"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">
  Hi, Pranav here <span className="inline-block animate-wave"></span></h1>

      <p className="text-lg text-gray-700">
        {`${years} year old Fullstack Developer, GenAI Enthusiast, and a CS Student `}
      </p>
      <div className="flex justify-center items-center space-x-6 text-2xl mt-4">
        <a
          href="mailto:npranavtej@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/npranavtej"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <LuLinkedin />
        </a>

        <a
          href="https://www.hackerrank.com/npranavtej"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
        >
          <SiHackerrank />
        </a>
         <a
          href="https://github.com/Pranavtej1404"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:bg-white rounded-full transition-colors"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <PiMouseScrollBold className="text-3xl text-gray-400 animate-bounce" />
    </div>
    </section>
  )
}
