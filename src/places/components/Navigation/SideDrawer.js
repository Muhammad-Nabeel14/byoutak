import { useState } from "react";

import NavLinks from "./NavLinks";

const SideDrawer = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  return (
    <aside
      className={`side-drawer block relative left-0 top-0 z-20 ${
        drawerIsOpen ? "w-1/3 lg:w-[20%]" : "w-[44px]"
      } transition-all duration-500 h-screen bg-[#212020] card-shadow mr-2 overflow-hidden`}
      onClick={props.onClick}
    >
      <div
        className={`relative flex ${
          drawerIsOpen ? "justify-between" : "justify-center"
        } text-gray-300 font-semibold p-4`}
      >
        <h2 className="text-xs">Navigation</h2>
        <button
          className="main-navigation__menu-btn absolute bg-[#212020] px-4 right-0 w-12 h-5 flex flex-col justify-around cursor-pointer"
          onClick={toggleDrawer}
        >
          <span className={`${drawerIsOpen?'-rotate-45 top-[0.52rem]':'rotate-0'} transition-all duration-500 relative block w-5 h-[3px] bg-white`}></span>
          <span className={`${drawerIsOpen?'opacity-0':'opaccity-1'} transition-all duration-500 relative block w-5 h-[3px] bg-white`}></span>
          <span className={`${drawerIsOpen?'rotate-45 -top-[0.3rem]':'rotate-0'} transition-all duration-500 relative block w-5 h-[3px] bg-white`}></span>
        </button>
      </div>
      <NavLinks isOpen={drawerIsOpen}/>
    </aside>
  );
};
export default SideDrawer;