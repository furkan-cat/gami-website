import { useNavigate } from "react-router-dom";
import { pageLinks, PageLinkTypes } from "../../constants";
import Logo from "../../../public/svg/logo";

export default function Footer() {
  const navigate = useNavigate();

  const clickHandler = (item: PageLinkTypes) => {
    navigate(item.path);
  };
  return (
    <div className="fixed bottom-0 flex justify-between w-full items-center bg-gray-100 border-t border-gray-300 p-6">
      <div>
        <Logo />
      </div>
      <ul className="hidden md:flex md:[&>:not(:first-child)]:ml-4 lg:[&>:not(:first-child)]:ml-12 text-gray-800">
        {pageLinks.map((item: PageLinkTypes) => (
          <li
            key={item.title}
            onClick={() => clickHandler(item)}
            className="hover:text-gray-300 cursor-pointer transition duration-150 ease-out"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex [&>*]:mr-2 md:[&>*]:mr-4">
        <img src="images/medium.png" alt="" className="w-8 h-8" />
        <img src="images/twitter.png" alt="" className="w-8 h-8" />
        <img src="images/telegram.png" alt="" className="w-8 h-8" />
        <img src="images/youtube.png" alt="" className="w-8 h-8" />
      </div>
    </div>
  );
}
