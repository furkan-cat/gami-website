import HeaderGAMILogo from "../../public/svg/main";
import WhatWeDo from "../sections/home/what-we-do";
import Carousel from "../sections/home/carousel";
import { Accordion } from "../components";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-0 md:px-20">
        <div className="flex flex-col [&>:not(:first-child)]:mt-10 w-full md:w-6/12 px-4 md-px-0">
          <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl md:text-7xl leading-none">
            Lorem Ipsum Dolor Sit Amet
          </div>
          <div className="text-blue-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.{" "}
          </div>
          <div className="flex">
            <button className="text-sm text-blue-gray-800 font-semibold shadow-md px-8 py-4 rounded-md">
              Explore GAMI
            </button>
            <button className="text-sm text-blue-gray-800 font-semibold shadow-md px-8 py-4 ml-6 rounded-md">
              Buy GAMI
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-3/12 mt-10 md:mt-0">
          <HeaderGAMILogo className="w-2/4 h-2/4 md:w-full md:h-full" />
        </div>
      </div>
      <section className="mt-40">
        <div className="flex flex-col w-full md:w-[630px] mx-auto text-start md:text-center px-8 md-px-0">
          <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl md:text-7xl leading-none">
            Lorem Ipsum Dolor Sit Amet
          </div>
          <div className="text-blue-gray-400 text-xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </div>
        </div>
        <div className="px-0 md:px-20 mt-10">
          <div className="md:flex sm:block flex-col md:flex-row justify-between items-center w-full">
            <div className="basis-full md:basis-2/4 w-full">
              <img
                src="images/PHOTO_1.png"
                className="w-full lg:max-w-[800px] pr-0 md:pr-6"
              />
            </div>
            <div className="basis-2/4 md:pl-6 px-8 md:px-0">
              <div className="text-blue-gray-800 font-semibold text-2xl md:text-2xl lg:text-3xl">
                Aenean egestas libero amet vulputate.
              </div>
              <div className="text-blue-gray-400 text-base md:text-xl md:text-lg lg:text-2xl font-regular mt-2 order-1 md:order-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi morbi sit consectetur elit.
              </div>
            </div>
          </div>

          <div className="md:flex sm:block flex-col md:flex-row justify-between items-center w-full">
            <div className="basis-full md:basis-2/4 w-full">
              <img
                src="images/PHOTO_2.png"
                className="w-full lg:max-w-[800px] pr-0 md:pr-6"
              />
            </div>
            <div className="basis-2/4 md:pl-6 px-8 md:px-0 order-last md:order-first">
              <div className="text-blue-gray-800 font-semibold text-2xl md:text-2xl lg:text-3xl">
                Aenean egestas libero amet vulputate.
              </div>
              <div className="text-blue-gray-400 text-base md:text-xl md:text-lg lg:text-2xl mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi morbi sit consectetur elit.
              </div>
            </div>
          </div>

          <div className="md:flex sm:block flex-col md:flex-row justify-between items-center w-full">
            <div className="basis-full md:basis-2/4 w-full">
              <img
                src="images/PHOTO_3.png"
                className="w-full lg:max-w-[800px] pr-0 md:pr-6"
              />
            </div>
            <div className="basis-2/4 md:pl-6 px-8 md:px-0">
              <div className="text-blue-gray-800 font-semibold text-2xl md:text-2xl lg:text-3xl">
                Aenean egestas libero amet vulputate.
              </div>
              <div className="text-blue-gray-400 text-base md:text-xl md:text-lg lg:text-2xl font-regular mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi morbi sit consectetur elit.
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo />

      <Carousel />
      <section className="py-8 px-2 md:px-12 bg-gray-100">
        <div className="flex flex-col items-center w-full md:w-[630px] mx-auto text-start md:text-center px-8 md-px-0">
          <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl md:text-7xl leading-none">
            Lorem Ipsum
          </div>
          <div className="text-blue-gray-400 text-xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </div>
        </div>
      </section>

      <Accordion />
    </div>
  );
}
