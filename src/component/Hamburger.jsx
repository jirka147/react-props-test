import React from "react";

export default function Hamburger({ isOpen, setIsOpen }) {
  const handleOpenClose = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="hamburger-menu" onClick={handleOpenClose}>
      {" "}

        <div className={!isOpen ? "h-m-open1" : "h-m-close1"}></div>{" "}
        <div className={!isOpen ? "h-m-open2" : "h-m-close2"}></div>
        <div className={!isOpen ? "h-m-open3" : "h-m-close3"}></div>{" "}
        <div className={!isOpen ? "h-m-open4" : "h-m-close4"}></div>
    </div>
  );
}
