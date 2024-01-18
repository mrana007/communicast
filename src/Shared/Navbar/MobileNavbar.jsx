import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Dropdown,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IoNotifications, IoPersonAdd, IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo/CommuniCast-red.png";
import { SiMessenger } from "react-icons/si";
import { IoAddCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi2";
import { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";

const MobileNavbar = () => {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  const menuItems = (
    <>
      <NavbarItem>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <GoHomeFill className="text-2xl" />
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to="/addFriend"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <IoPersonAdd className="text-2xl" />
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to="/group"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <HiUserGroup className="text-2xl" />
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to="/group"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <IoNotifications className="text-2xl"/>
        </NavLink>
      </NavbarItem>
    </>
  );
    

  return (
    <div className="mx-auto">
      <div>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="-ml-4 max-w-[90%]" >
            {/* avatar */}
            <img src={logo} alt="" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <IoAddCircle className="text-xl" />
          <IoSearchSharp className="text-xl" />
          <SiMessenger className="text-xl" />
        </NavbarContent>
      </Navbar>
      </div>
      {/* Nav Bottom */}
      <Navbar onMenuOpenChange={setIsDropdownMenu}>
        {menuItems}
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <NavbarMenuToggle
          aria-label={isDropdownMenu ? "Close menu" : "Open menu"}
        />
            </DropdownTrigger>
            <DropdownMenuItems/>
          </Dropdown>
      </Navbar>
    </div>
  );
};

export default MobileNavbar;
