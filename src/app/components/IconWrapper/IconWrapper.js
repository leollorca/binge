"use client";

import { useState } from "react";

const IconWrapper = ({ Icon, padding }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block ${padding} rounded-full bg-dark-gray hover:text-light-gray`}
    >
      {
        <Icon
          className={`size-6 ${isHovered ? "text-light-gray" : "text-gray"}`}
        />
      }
    </span>
  );
};

export default IconWrapper;
