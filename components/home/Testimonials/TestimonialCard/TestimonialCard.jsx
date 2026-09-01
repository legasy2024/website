import Image from "next/image";
import emblem from "../assets/googleEmblem.png";
import starSvg from "../assets/star.svg";

function TestimonialCard({ name, avatar, review, date, rating = 5, photos, googleUrl, verifiedLabel }) {
  return (
    <div className="flex flex-col gap-y-4 h-full bg-white/5 backdrop-blur-2xl border border-[#827B71] rounded-xl p-6">
      <div className="flex items-center gap-x-3">
        <div className="relative shrink-0 w-14 h-14">
          <Image
            src={avatar}
            alt={`Foto de perfil de Google de ${name}`}
            fill
            sizes="56px"
            className="rounded-full object-cover"
          />
          <Image
            src={emblem}
            width={20}
            height={20}
            alt="Google logo"
            className="rounded-full absolute -bottom-1 -right-1"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-TextSecondary-100 font-medium truncate">{name}</h3>
          <span className="text-sm font-light text-TextSecondary-100/70">{date}</span>
        </div>
      </div>

      <span className="flex flex-row gap-x-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Image key={i} src={starSvg} width={16} height={16} alt="star-icon" />
        ))}
      </span>

      <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-6">
        &quot;{review}&quot;
      </p>

      {photos?.length > 0 && (
        <div className="flex gap-x-2 mt-1">
          {photos.map((photo, i) => (
            <div key={i} className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
              <Image
                src={photo}
                alt={`Foto real del trabajo compartida por ${name} en su reseña de Google`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-2 flex items-center gap-x-1.5 text-xs text-TextSecondary-100/70 hover:text-BgOrange transition-colors w-fit"
      >
        <Image src={emblem} width={14} height={14} alt="" />
        {verifiedLabel}
      </a>
    </div>
  );
}
export default TestimonialCard;
