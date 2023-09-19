import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Certificates = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-3 border-2 border-black rounded-full">
      <div
        className="bg-white  py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30ox]">
          {open ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="px-[50px] pb-[20px]">{description}</div>
      </Collapse>
    </div>
  );
};

export default Certificates;
