import { React, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import FeaturesNavContent from "./FeaturesNavContent";
import { RiTodoFill, RiCalendarCheckFill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { IoTimer } from "react-icons/io5";

const MobileNav = ({ clickHandler }) => {
  const [featuredMenu, setFeaturedMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const featuredMenuHandler = () => {
    setFeaturedMenu(!featuredMenu);
  };
  const companyMenuHandler = () => {
    setCompanyMenu(!companyMenu);
  };
  return (
    <section className="text-center w-full h-screen overflow-hidden">
      <div className="flex justify-between m-3">
        <div></div>
        <GrClose className="text-2xl my-5 mx-3" onClick={clickHandler} />
      </div>
      <div className="overflow-hidden">
        <ul className="mx-5 space-y-6 text-base h-screen text-gray-700/90 font-semibold overflow-y-hidden text-start">
          <li className="text-start flex" onClick={featuredMenuHandler}>
            Features
            <small className="inline-flex items-center h-full my-auto">
              <BiChevronDown className="text-base ml-1" />
            </small>
          </li>
          {featuredMenu && (
            <FeaturesNavContent>
              <ul className="space-y-3 my-6 text-gray-700/90 font-semibold text-base">
                <li className="inline-flex items-center cursor-pointer mx-7">
                  <small className="mr-3 text-blue-700">
                    <RiTodoFill className="text-2xl" />
                  </small>
                  <small className="text-base">Todo List</small>
                </li>
                <li className="inline-flex items-center cursor-pointer mx-7">
                  <small className="mr-3">
                    <RiCalendarCheckFill className="text-2xl text-sky-400" />
                  </small>
                  <small className="text-base">Calender</small>
                </li>
                <li className="inline-flex items-center cursor-pointer mx-7">
                  <small className="mr-3">
                    <BsFillBellFill className="text-2xl text-yellow-400" />
                  </small>
                  <small className="text-base">Reminders</small>
                </li>
                <li className="inline-flex items-center cursor-pointer mx-7">
                  <small className="mr-3">
                    <IoTimer className="text-2xl text-purple-700" />
                  </small>
                  <small className="text-base">Planning</small>
                </li>
              </ul>
            </FeaturesNavContent>
          )}
          <li
            className="text-start flex items-center"
            onClick={companyMenuHandler}
          >
            Company
            <small className=" inline-flex items-center">
              <BiChevronDown className="text-base" />
            </small>
          </li>
          {companyMenu && (
            <ul className="space-y-3 my-6 text-gray-700/90 font-semibold w-full pl-8 text-base">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          )}
          <li className="text-start">Careers</li>
          <li>About</li>

          <div className="space-y-5 items-center w-full py-3">
            <div className="cursor-pointer text-center">Login</div>
            <div className="border-2 border-gray-500 px-4 py-2 rounded-xl cursor-pointer text-center">
              Register
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default MobileNav;
