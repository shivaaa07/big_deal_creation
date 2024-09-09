import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Heading = ({ headingName, viewBtn }) => {
  return (
    <div className="">
      <div className="heading">
        <div className="headingWrapper flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-poppins">{headingName}</h2>
          <div className="viewMoreProduct">
            <NavLink
              to="About"
              className={`flex items-center font-semibold gap-1 ${viewBtn}`}
            >
              View More <MdArrowRightAlt />
            </NavLink>
          </div>
        </div>
        <div className="divider h-0.5 bg-indigo-100 mt-2 mb-5"></div>
      </div>
    </div>
  );
};

export default Heading;
