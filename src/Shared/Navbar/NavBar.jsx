import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Dropdown,
  Avatar,
  Input,
} from "@nextui-org/react";
import logo from "../../assets/logo/icon.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi2";
import { SiMessenger } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../assets/icon/user/avatar.png";
import { IoPersonAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import DropdownMenuItems from "./DropdownMenuItems";

const NavBar = () => {
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
    </>
  );

  return (
    <div>
      <Navbar className="w-full flex justify-between mx-auto">
        <NavbarBrand className="gap-4">
          <img src={logo} alt="" className="w-[20%] lg:w-[12%] -m-6 justify-start" />
          {/* search field */}
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            smClasses="block"
            mdClasses="hidden"
            lgClasses="hidden"
            placeholder="Search CommuniCast"
            size="md"
            startContent={<IoSearchSharp size={18} />}
            type="search"
          />
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-3 md:gap-8" justify="center">
          {menuItems}
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          {/* messenger & notification */}
          <NavLink
            to="/messenger"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            <SiMessenger className="text-2xl" />
          </NavLink>

          <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            <IoNotifications className="text-2xl" />
          </NavLink>

          {/* Dropdown */}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                name="Jason Hughes"
                size="sm"
                src={avatar}
              />
            </DropdownTrigger>
            {/* DropdownMenuItems */}
            <DropdownMenuItems/>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
