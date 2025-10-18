import Image from "next/image";

import bingelogo from "./bingelogo.png";

const BingeLogo = ({ height }) => {
  return (
    <Image
      src={bingelogo}
      alt="Binge logo"
      className={`w-auto`}
      style={{ height: `${height}px` }}
    />
  );
};

export default BingeLogo;
