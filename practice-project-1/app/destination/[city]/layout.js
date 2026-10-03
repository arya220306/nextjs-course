import React from "react";

const layout = ({ children, info }) => {
  return (
    <div className="flex">
      <div className="w-[50%]">{children}</div>
      <div className="w-[50%]">{info}</div>
    </div>
  );
};

export default layout;
