import React, { useState, useEffect } from "react";

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
  const handleClickNav = (index) => {
    const arrayRes = [...listItem];
    listItem.forEach((item, index1) => {
      if (index1 === index) {
        arrayRes[index] = {
          label: item.label,
          active: true,
        };
      }
      else 
      {
        arrayRes[index1] = {
            label: item.label,
            active: false,
          };
      }
    });
    setListItem(arrayRes)
  };
  const navElement = listItem.map((item, index) => {
    const result = item.active ? (
      <li
        className="hover:cursor-pointer bg-primary text-white w-60 flex justify-end pr-2"
        onClick={() => handleClickNav(index)}
      >
        <h3>{item.label}</h3>
        <i class="fa-solid fa-house"></i>
      </li>
    ) : (
      <li
        className="hover:cursor-pointer pr-2"
        onClick={() => handleClickNav(index)}
      >
        <h3>{item.label}</h3>
        <i class="fa-solid fa-house"></i>
      </li>
    );
    return result;
  });
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex flex-row justify-end pr-4 items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b-2 border-primary text-right">
          phimmoi.net
        </h4>
      </div>
      <ul className="flex flex-col items-end pr-4 my-2">{navElement}</ul>
    </nav>
  );
};

export default Nav;
