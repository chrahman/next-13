import Link from "next/link";
import React from "react";

const Navigation = () => {
  
  return (
    <div className="flex justify-center ">
      <nav className="self-center sticky top-0 w-full  shadow bg-black">
        <div className="flex justify-between items-center text-white">
          <Link href="/">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              Next 13
            </h1>
          </Link>
          <ul className="hidden md:flex items-center text-[18px] font-semibold pl-32">
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href="/posts">Blog Posts</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href="/users">Users</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href="/about-us">About</Link>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
          <form className="flex mr-5">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md mr-2"
              required
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </form>
          <div className="text-white text-center text-base pr-5 !hidden lg:inline-flex">
            {" "}
            <a
              href="#"
              className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
            >
              <i className="fa fa-twitter"></i>
            </a>{" "}
            <a
              href="#"
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-instagram"></i>
            </a>{" "}
            <a
              href="#"
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-facebook"></i>
            </a>{" "}
            <a
              href="#"
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-google"></i>
            </a>{" "}
            <a
              href="#"
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-linkedin"></i>
            </a>{" "}
          </div>{" "}
          <button className="sm:hidden p-3 mx-10 hover:bg-black rounded-xl group">
            <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
            <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
            <div className="w-5 my-[3px] h-[3px] bg-white"></div>
            <div className="sm:hidden absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-black group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
              <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                <li className="hover:border border-white py-4 px-6 w-full">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:border border-white py-4 px-6 w-full">
                  <Link href="/posts">Blog Posts</Link>
                </li>
                <li className="hover:border border-white py-4 px-6 w-full">
                  <Link href="/users">Users</Link>
                </li>
                <li className="hover:border border-white py-4 px-6 w-full">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="hover:border border-white py-4 px-6 w-full">
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
