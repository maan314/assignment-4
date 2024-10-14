import Link from 'next/link';
import React from 'react'

function About() {
  return (
    <>
  <div className="max-w-[1000px] max-h-full bg-white shadow flex flex-col items-center my-24 p-16 ml-56 rounded-3xl">
    <p className="text-xl text-gray-950 font-semibold pb-5">About Us</p>
    <p className="pb-2 text-gray-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis
        tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum similique veritatis quos blanditiis, totam impedit fugit, repellendus facilis nisi omnis ab fugiat nam ad. Expedita possimus et dignissimos corporis.</p>
    <Link href="/"
        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded-2xl  hover:bg-blue-700 flex items-center justify-center px-10 py-4 mt-4" >
        Get to know us
    </Link>
</div>
    </>
  )
}

export default About;