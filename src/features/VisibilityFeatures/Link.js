import React from "react";

const Link = ({ children }) => {
  const onClick = (e) => {
    debugger;
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
