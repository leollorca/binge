import Image from "next/image";

const Card = ({ imgSrc, title, datetime }) => {
  return (
    <li>
      <Image src={imgSrc} alt={`${title} poster`} width={100} height={100} />
      <h3>{title}</h3>
      <time dateTime={datetime}></time>
    </li>
  );
};

export default Card;
