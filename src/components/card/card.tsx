import { PropsWithChildren } from "react";
import CardBody from "./card-body";
import CardHeader from "./card-header";

interface CardTypes extends PropsWithChildren {
  className?: string;
}

export default function Card(props: CardTypes) {
  return (
    <div
      className={`flex flex-col justify-between basis-full md:basis-5/12 lg:basis-3/12 h-64 border shadow-md rounded bg-white p-4 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
