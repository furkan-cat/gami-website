import { useState } from "react";
import { accordionData } from "../../constants";
import AccordionItem from "./accordion-item";

export default function Accordion() {
  const [open, setOpen] = useState<boolean | number | null>(false);

  const toggleHandler = (i: any) => {
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  };

  return (
    <section className="grid place-items-center pb-[150px] px-2 md:px-0 bg-gray-100">
      <div className="max-w-[846px]">
        {accordionData.map((data, i) => (
          <AccordionItem
            key={data.id}
            isOpen={i === open}
            title={data.title}
            desc={data.desc}
            onClick={() => toggleHandler(i)}
          />
        ))}
      </div>
    </section>
  );
}
