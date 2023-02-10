import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/svg/logo";
import Button from "../../components/button";
import { pageLinks, PageLinkTypes } from "../../constants";

export default function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState<string>("Home");

  const clickHandler = (item: PageLinkTypes) => {
    setPageState(item.title);
    navigate(item.path);
  };

  // if the user come from the contact-us page refresh the state to initial value as "Home"
  // * I do not use any global state management because this as a small project
  useEffect(() => {
    if (location.state === "from-contact-us-tab") setPageState("Home");
  }, [location]);

  return (
    <div className="w-full h-auto left-0 top-0 bg-gray-200 px-10">
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex md:[&>:not(:first-child)]:ml-4 lg:[&>:not(:first-child)]:ml-12 text-gray-800">
          {pageLinks.map((item: any) => (
            <li
              key={item.title}
              onClick={() => clickHandler(item)}
              className={`inline relative rounded-t-xl px-5 py-2.5 mt-3 ${
                pageState === item.title ? "font-bold bg-gray-100" : ""
              }`}
            >
              <b
                className={`absolute bottom-0 -left-5 w-5 h-full bg-gray-100 before:left-0 before:top-0 before:absolute before:w-full before:h-full before:rounded-br-xl before:bg-gray-200 ${
                  pageState === item.title ? "block" : "hidden"
                }`}
              />
              <b
                className={`absolute top-0 -right-5 w-5 h-full bg-gray-100 before:right-0 before:top-0 before:absolute before:w-full before:h-full before:rounded-bl-xl before:bg-gray-200 ${
                  pageState === item.title ? "block" : "hidden"
                }`}
              />
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
        <Button title="But GAMI" />
      </div>
    </div>
  );
}
