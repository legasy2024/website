import Image from "next/image";

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-full mt-5 md:mt-0 sm:max-w-64">
      <figure className="flex flex-col items-center p-2 bg-[#D8CDBC]/40 w-14 h-14 rounded-lg">
        <Image
          src={icon}
          width={24}
          height={24}
          alt="icon"
          className="m-auto"
        />
      </figure>
      <h3 className="text-[#292929] font-bold mt-2 md:mt-4">{title}</h3>
      <p className="text-TextBlack text-sm mt-2 md:mt-4">{description}</p>
    </div>
  );
};

export default ValueCard;
