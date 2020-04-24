import React from "react";
import { useDispatch } from "react-redux";
import { toggleVis } from "./visibilitySlice";

const Link = ({ children }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(toggleVis(e.target.innerText));
  };

  return (
    <button
      onClick={onClick}
      // disabled={active}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
};

export default Link;
