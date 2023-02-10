import { Card, CardBody, CardHeader } from "../../components";
import { cardData } from "../../constants";

export default function WhatWeDo() {
  return (
    <section className="mt-16 py-20 bg-gray-200 px-2 md:px-12">
      <div className="flex flex-col items-center w-full md:w-[630px] mx-auto text-start md:text-center px-8 md-px-0">
        <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl md:text-7xl leading-none">
          What We Do
        </div>
        <div className="text-blue-gray-400 text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
        </div>
      </div>

      <div className="flex flex-wrap justify-center [&>:not(:last-child)]:mb-3 md:[&>:not(:last-child)]:mr-5 mt-20">
        {cardData.map((m) => (
          <div className="group perspective[1000px]">
            <Card
              key={m.title}
              className="[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000"
            >
              <div className="[backface-visibility:hidden]">
                <CardHeader src={m.src} alt="launchpad" />
                <CardBody title={m.title} description={m.description} />
              </div>

              <div className="absolute w-full h-full my-rotate-y-180 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                <CardHeader src={m.src} alt="launchpad" />
                <CardBody title={m.title} description={m.description} />
              </div>
            </Card>
          </div>
        ))}

        <Card className="relative mr-0 md:mr-5">
          <img
            src="images/GALATASARAY_3D-F3 1.png"
            alt="gs"
            className="w-34 md:w-38 lg:w-46 h-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
          />
          <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 flex flex-col text-center w-full whitespace-pre-line">
            <div className="text-blue-gray-400 text-base font-semibold md:font-bold">
              Official 3.0, Metaverse, P2E Parthner of
            </div>
            <div className="text-blue-gray-800 font-bold text-2xl md:text-2xl lg:text-3xl mt-2 whitespace-pre-line">
              GALATASARAY S.K.
            </div>
          </div>
        </Card>

        {/* <Card className="relative mr-0 md:mr-5">
          <img
            src="images/GALATASARAY_3D-F3 1.png"
            alt="gs"
            className="w-34 md:w-38 lg:w-46 h-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
          />
          <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 flex flex-col text-center w-full whitespace-pre-line">
            <div className="text-blue-gray-400 text-base font-semibold md:font-bold">
              Official 3.0, Metaverse, P2E Parthner of
            </div>
            <div className="text-blue-gray-800 font-bold text-2xl md:text-2xl lg:text-3xl mt-2 whitespace-pre-line">
              GALATASARAY S.K.
            </div>
          </div>
        </Card> */}

        {/* <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
          <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective[1000px]">
            <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  duration-1000">
              <div className="absolute backface-hidden w-full h-full">
                <img src="images/PHOTO_2.png" className="w-full h-full" />
              </div>
              <div className="absolute my-rotate-y-180 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full bg-gray-100 overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <h1 className="text-3xl font-semibold">The King's Man</h1>
                  <p className="my-2">9.0 Rating</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis itaque assumenda saepe animi maxime libero non
                    quasi, odit natus veritatis enim culpa nam inventore
                    doloribus quidem temporibus amet velit accusamus.
                  </p>
                  <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
}
