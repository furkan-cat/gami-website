import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "react-collapse";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
  title: string;
  desc: string;
}

export default function AccordionItem(props: IProps) {
  const { isOpen, onClick, title, desc } = props;
  return (
    <div className="pt-[10px]">
      <div
        className="bg-gray-300 py-[25px] px-[20px] flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <p className="text-blue-gray-800 text-[22px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="text-blue-gray-400 p-[15px]">{desc}</div>
      </Collapse>
    </div>
  );
}
