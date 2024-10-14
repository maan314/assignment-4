import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center my-12 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-900">
              Get Yourself Register {"</>"}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              quidem aliquam, voluptatum fuga ratione consequatur neque eos
              perspiciatis dolores omnis. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus, cumque. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Inventore amet minus
              facilis, tenetur vero recusandae voluptate laborum deserunt
              accusantium. Quia! Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              doloremque?
            </p>
            <Link
              href="signup"
              className="inline-flex items-center justify-center px-5 py-4 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Sign Up
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="login"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-950 border border-gray-600 rounded-lg hover:bg-gray-200 dark:border-gray-700
            focus:ring-4 hover:text-white focus:ring-gray-100   dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              LogIn
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 my-4 lg:flex">
            <img
              src="https://img.freepik.com/free-vector/cyber-security-isometric-illustration-with-computer-character-hacker_1284-63711.jpg?t=st=1728817596~exp=1728821196~hmac=1c9e02470b885ee1131c86bed07f686eb9ab2e12b4065fe1f7391582652ba4bd&w=740"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
