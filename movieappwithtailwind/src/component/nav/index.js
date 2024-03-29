import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [listItem, setListItem] = useState([
    {
      label: "Home",
      active: false,
    },
    {
      label: "Movie",
      active: true,
    },
    {
      label: "About",
      active: false,
    },
  ]);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleClickNav = (index) => {
    const arrayRes = [...listItem];
    listItem.forEach((item, index1) => {
      if (index1 === index) {
        arrayRes[index] = {
          label: item.label,
          active: true,
        };
      } else {
        arrayRes[index1] = {
          label: item.label,
          active: false,
        };
      }
    });
    setListItem(arrayRes);
  };
  const navElement = listItem.map((item, index) => {
    const result = item.active ? (
      <li
        className="hover:cursor-pointer bg-primary text-white flex flex-row justify-end pr-2 items-center w-11/12 md:ml-3"
        onClick={() => handleClickNav(index)}
      >
        <h3>{item.label}</h3>
        <i class="fa-solid fa-house ml-2 text-xl"></i>
      </li>
    ) : (
      <li
        className="hover:cursor-pointer pr-2 flex flex-row justify-end items-center w-11/12 md:ml-3"
        onClick={() => handleClickNav(index)}
      >
        <h3>{item.label}</h3>
        <i class="fa-solid fa-house ml-2 text-xl"></i>
      </li>
    );
    return result;
  });
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex md:block flex-row justify-between md:justify-end pr-4 items-center pl-10">
        <h4 className="uppercase font-bold text-primary py-4 text-right border-b-2 border-primary">
          phimmoi.net
        </h4>
        {/* <i
          className="md:hidden fa-solid fa-house ml-2 text-xl hover:cursor-pointer"
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        ></i> */}
        <FaBars
          className="md:hidden ml-2 text-xl hover:cursor-pointer"
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        />
      </div>
      <ul
        className={`flex flex-col items-end pr-4 my-2 ${
          showNavbar ? "" : "hidden"
        } md:block`}
      >
        {navElement}
      </ul>
    </nav>
  );
};

export default Nav;
