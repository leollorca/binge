const Page = async () => {
  const data = await fetch(
    `${process.env.API_URL}?username=${process.env.USER_ID}&password=${process.env.USER_PASSWORD}&action=get_vod_streams`
  );
  const films = await data.json();
  console.log(films);

  return (
    <h1 className="text-[24px] font-bold text-light-gray">Films populaires</h1>
  );
};

export default Page;
