import Image from "next/image";

const Card = ({ imgSrc, title, datetime }) => {
  return (
    <li>
      <Image src={imgSrc} alt={`${title} poster`} />
      <h3>{title}</h3>
      <time datetime={datetime}></time>
    </li>
  );
};

export default Card;
