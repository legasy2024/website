import Image from "next/image";
import emblem from "../assets/googleEmblem.png";
import starSvg from "../assets/star.svg";

function TestimonialCard({ name, pfp, review, date }) {
  return (
    <div className="flex flex-col items-center p-10 gap-y-4 w-5/6 min-w-5-6 place-self-center">
      <figure className="relative mt-10">
        <Image
          src={pfp}
          width={80}
          height={80}
          alt="Profile Pic"
          className="rounded-full"
        />
        <Image
          src={emblem}
          width={30}
          height={30}
          alt="Google logo"
          className="rounded-full absolute bottom-0 left-14"
        />
      </figure>
      <h1 className="text-TextSecondary-100 font-medium">{name}</h1>
      <span className="flex flex-row gap-x-2">
        <Image src={starSvg} width={20} height={20} alt="star-icon" />
        <Image src={starSvg} width={20} height={20} alt="star-icon" />
        <Image src={starSvg} width={20} height={20} alt="star-icon" />
        <Image src={starSvg} width={20} height={20} alt="star-icon" />
        <Image src={starSvg} width={20} height={20} alt="star-icon" />
      </span>
      <div className="bg-white/10 backdrop-blur-2xl w-[250px] lg:w-[1000px] py-5 px-5 border border-[#827B71] rounded-md">
        <p className="max-w-[900px] font-semibold text-white text-lg md:text-xl lg:text-2xl text-center">&quot;{review}&quot;</p>
      </div>
      <p className="mb-6 font-light text-TextSecondary-100">{date}</p>
    </div>
  );
}
export default TestimonialCard;
