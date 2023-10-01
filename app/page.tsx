import Testmonials from "@/app/components/server/Testmonials";
import { Fragment } from "react";
import NextImage from "@/app/components/client/NextImage";

export default function Home() {
  return (
    <Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 container">
        <header className="flex justify-center ">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col max-w-7xl justify-center items-center p-2">
              <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
                <div className="text-5xl font-bold ">
                  Next 13 with new App Router and Tailwind CSS
                </div>
                <div className="text-xl font-semibold text-gray-400 ">
                  Help save the planet with KWATT tokenized electricity
                </div>
                <form className="md:text-lg">
                  <input
                    className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-2xl placeholder-slate-400 px-4 py-1 focus:outline-none "
                    type="email"
                    placeholder="E-mail Address"
                    required
                  />
                  <button
                    type="submit"
                    className="p-1 m-2 rounded-2xl text-white bg-blue-500 px-4 font-semibold  hover:bg-blue-900 hover:trandform ease-in-out duration-300"
                  >
                    Subscribe{" "}
                  </button>
                </form>
              </div>
              <div className="w-3/4 h-60 md:h-96 my-4  rounded-lg overflow-hidden">
                <NextImage title="cryptocurrency,electricity" />
              </div>
            </div>
          </div>
        </header>
        <Testmonials />
      </main>
    </Fragment>
  );
}
