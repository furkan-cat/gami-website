import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { carouselData } from "../../constants";
import useWindowSize from "../../hooks/usWindowSize";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export default function Carousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const size: Size = useWindowSize();

  const slideLeft = () => {
    if (sliderRef.current) {
      if (size.width && size.width < 768) {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
      } else {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth / 2;
      }
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      if (size.width && size.width < 768) {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
      } else {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / 2;
      }
    }
  };

  return (
    <section className="py-20 md:px-12 bg-gray-100">
      <div className="flex flex-col items-center w-full md:w-[630px] mx-auto text-start md:text-center px-8 md-px-0">
        <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl md:text-7xl leading-none">
          Lorem Ipsum Dolor Sit Amet
        </div>
        <div className="text-blue-gray-400 text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
        </div>
      </div>
      {size.width && size?.width > 768 ? (
        <div className="relative w-full">
          <MdChevronLeft
            className="text-black opacity-50 cursor-pointer hover:opacity-100 absolute top-2/4 left-1/4 -translate-y-1/2 -translate-x-[110px] md:-translate-x-[200px] lg:-translate-x-[275px] xl:-translate-x-[300px] 2xl:-translate-x-[365px] bg-gray-300 rounded-full"
            size={25}
            onClick={slideLeft}
          />

          <div
            ref={sliderRef}
            className="flex w-full md:w-[700px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1450px] mx-auto overflow-x-scroll scroll-smooth scrollbar-hide mt-10 z-10 scroll-smooth snap-x snap-mandatory touch-pan-x"
          >
            {carouselData.map((c) => (
              <div
                className={`flex flex-col justify-between min-w-full md:min-w-[350px] lg:min-w-[475px] xl:min-w-[600px] 2xl:min-w-[725px] bg-white border shadow-md rounded p-4 cursor-pointer`}
                key={c.id}
              >
                <div>
                  <div className="flex justify-center">
                    <img src="images/Star.png" alt="star" className="w-4 h-4" />
                    <img src="images/Star.png" alt="star" className="w-4 h-4" />
                    <img src="images/Star.png" alt="star" className="w-4 h-4" />
                    <img src="images/Star.png" alt="star" className="w-4 h-4" />
                    <img src="images/Star.png" alt="star" className="w-4 h-4" />
                  </div>
                  <div className="text-blue-gray-800 text-xl font-semibold mt-4">
                    {c.title}
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="images/CLIENT_PHOTO.png"
                    alt="client"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="text-black opacity-50 cursor-pointer hover:opacity-100 absolute top-2/4 right-1/4 -translate-y-1/2 translate-x-[110px] md:translate-x-[200px] lg:translate-x-[275px] xl:translate-x-[300px] 2xl:translate-x-[365px] bg-gray-300 rounded-full"
            size={25}
            onClick={slideRight}
          />
        </div>
      ) : (
        <div className="flex flex-col [&>*]:mt-4 px-2">
          {carouselData.map((c) => (
            <div
              className={`flex flex-col justify-between bg-white border shadow-md rounded p-4 cursor-pointer bg-gray-300`}
              key={c.id}
            >
              <div>
                <div className="flex justify-center">
                  <img src="images/Star.png" alt="star" className="w-4 h-4" />
                  <img src="images/Star.png" alt="star" className="w-4 h-4" />
                  <img src="images/Star.png" alt="star" className="w-4 h-4" />
                  <img src="images/Star.png" alt="star" className="w-4 h-4" />
                  <img src="images/Star.png" alt="star" className="w-4 h-4" />
                </div>
                <div className="text-blue-gray-800 text-xl font-semibold mt-4">
                  {c.title}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="images/CLIENT_PHOTO.png"
                  alt="client"
                  className="w-10 h-10"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
