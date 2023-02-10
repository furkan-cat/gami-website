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

      <div className="flex flex-wrap justify-center gap-3 mt-20 w-full">
        {cardData.map((m) => (
          <div className="group perspective[1000px] basis-full md:basis-5/12 lg:basis-3/12">
            <Card
              key={m.title}
              className="[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000"
            >
              <div>
                <CardHeader src={m.src} alt="launchpad" />
                <CardBody
                  title={m.title}
                  description={m.description}
                  color="text-blue-gray-800"
                />
              </div>

              <div className="absolute top-0 left-0 py-4 rounded w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden bg-blue-gray-800">
                <CardHeader src={m.src} alt="launchpad" />
                <CardBody
                  title={m.title}
                  description={m.description}
                  color="text-white"
                />
              </div>
            </Card>
          </div>
        ))}

        <div className="w-full group perspective[1000px] basis-full md:basis-5/12 lg:basis-3/12">
          <Card className="relative mr-0 md:mr-5 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full">
            <div>
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
            </div>
            <div className="absolute top-0 left-0 py-4 rounded w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden bg-blue-gray-800">
              <img
                src="images/GALATASARAY_3D-F3 1.png"
                alt="gs"
                className="w-34 md:w-38 lg:w-46 h-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
              />
              <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 flex flex-col text-center w-full whitespace-pre-line">
                <div className="text-white text-base font-semibold md:font-bold">
                  Official 3.0, Metaverse, P2E Parthner of
                </div>
                <div className="text-white font-bold text-2xl md:text-2xl lg:text-3xl mt-2 whitespace-pre-line">
                  GALATASARAY S.K.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
