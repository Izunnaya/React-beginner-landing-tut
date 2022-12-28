import { React, useState } from "react";
import { BsList } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { RiTodoFill, RiCalendarCheckFill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { IoTimer } from "react-icons/io5";
import MobileNav from "./MobileNav";
import FeaturesNavContent from "./FeaturesNavContent";
const Navbar = () => {
  // States Handling Hamburger Opening and Closing Nav
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  // States Handling Desktop Active Menu
  const [activeDestopFeautureMenu, setActiveDesktopFeatureMenu] =
    useState(false);
  const [activeDestopCompanyMenu, setActiveDesktopCompanyMenu] =
    useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

  // ======Component Styles========
  const style = {
    NavContainer: `h-[60px] flex items-center w-full text-sm relative h-screen`,
    NavItemsContainer: `px-6 lg:px-3 mt-6 flex justify-between items-center w-full mx-auto max-w-[1152px]`,
    LeftNavContainer: `flex gap-16 items-center`,
    LogoStyle: `text-4xl font-extrabold cursor-pointer`,
    LinksContainer: `gap-8 cursor-pointer text-slate-600/100 mt-1 hidden lg:flex text-sm relative`,
    ActiveLink: `inline-flex items-center cursor-pointer`,
    ActiveLinkContainer: `space-y-3 text-gray-700/90 font-semibold text-sm mx-5`,
    CompanyLink: `space-y-3 text-gray-700/90 font-semibold w-full mx-6 text-sm`,
  };

  return (
    <div
      className={
        openMenu &&
        "w-screen h-screen block lg:hidden bg-neutral-900/70 absolute top-0"
      }
    >
      <nav className={style.NavContainer}>
        <div className={style.NavItemsContainer}>
          <div className={style.LeftNavContainer}>
            {/* Logo  */}
            <h1 className={style.LogoStyle}>snap</h1>
            {/* Links with navigation */}
            <ul className={style.LinksContainer}>
              <li
                className="flex items-center"
                onClick={() => {
                  setActiveDesktopFeatureMenu(!activeDestopFeautureMenu);
                }}
              >
                Features
                <small className="ml-1 inline-flex">
                  <BiChevronDown />
                </small>
              </li>

              <li
                className="flex items-center relative"
                onClick={() => {
                  setActiveDesktopCompanyMenu(!activeDestopCompanyMenu);
                }}
              >
                Company
                <span className="ml-1">
                  <BiChevronDown />
                </span>
                {activeDestopCompanyMenu && (
                  <div className="absolute top-10 border py-8 px-3 rounded-3xl">
                    <ul className={style.CompanyLink}>
                      <li>History</li>
                      <li>Our Team</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                )}
              </li>
              <li>Careers</li>
              <li>About</li>

              {activeDestopFeautureMenu && (
                <div className="absolute top-9 -left-20 py-7 flex-col max-w-[160px] border-2 rounded-3xl">
                  <FeaturesNavContent>
                    <ul className={style.ActiveLinkContainer}>
                      <li className={style.ActiveLink}>
                        <small className="mr-3 text-blue-700">
                          <RiTodoFill className="text-2xl" />
                        </small>
                        <small className="text-base">Todo List</small>
                      </li>
                      <li className={style.ActiveLink}>
                        <small className="mr-3">
                          <RiCalendarCheckFill className="text-2xl text-sky-400" />
                        </small>
                        <small className="text-base">Calender</small>
                      </li>
                      <li className={style.ActiveLink}>
                        <small className="mr-3">
                          <BsFillBellFill className="text-2xl text-yellow-400" />
                        </small>
                        <small className="text-base">Reminders</small>
                      </li>
                      <li className={style.ActiveLink}>
                        <small className="mr-3">
                          <IoTimer className="text-2xl text-purple-700" />
                        </small>
                        <small className="text-base">Planning</small>
                      </li>
                    </ul>
                  </FeaturesNavContent>
                </div>
              )}
            </ul>
          </div>

          <div className=" gap-1 hidden lg:flex space-x-6 items-center">
            <div className="cursor-pointer">Login</div>
            <div className="border px-4 py-2 rounded-xl cursor-pointer">
              Register
            </div>
          </div>

          <div className=" sm:block lg:hidden cursor-pointer">
            <BsList className="text-2xl" onClick={handleMenuClick} />
          </div>
        </div>

        <div
          className={
            openMenu
              ? "absolute bg-white top-0 right-0 max-w-[70%] md:max-w-[50%] h-screen w-screen overflow-hidden"
              : "absolute hidden z-10"
          }
        >
          <MobileNav clickHandler={handleMenuClick} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
