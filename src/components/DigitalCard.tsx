import type { cardData } from "../data/types";
import About from "./About";
import ContactInfo from "./ContactInfo";
import ImageLoad from "./ImageLoad";
import VcardButton from "./VcardButton";

export default function DigitalCard({ cardData }: { cardData: cardData }) {
  const gradient = {
    green: "gradient-blue-green",
    blue: "gradient-blue",
    purple: "gradient-purple",
  };
  const bgImg = {
    GSEE: "pixel-map.svg",
    GSSI: "pixel-map.svg",
    synergy: "synergy-bg.svg",
  };
  return (
    <div
      className={`relative max-w-screen min-h-screen flex flex-col items-center ${cardData.logo === "synergy" ? "font-Aptos" : "font-Montserrat"}`}
    >
      <div
        className={`${gradient[cardData.theme]} h-108 w-full absolute top-0 left-0 -z-1`}
      />
      <img
        src={`/${bgImg[cardData.logo]}`}
        alt="background"
        className={`absolute -top-19 left-0 w-full max-h-72.5 h-full`}
      />
      <ImageLoad
        src={`/${cardData.logo}-Logo.svg`}
        alt="company logo"
        className="mx-auto block pt-10 w-70 h-auto"
      />
      <div className="flex flex-col items-center mt-12 bg-blur h-full relative p-4">
        <div className="p-1 bg-white absolute -top-1.5 ">
          <ImageLoad
            src="/Aftab-Hussain.webp"
            alt="Aftab Hussain image"
            className="w-72 h-72"
          />
        </div>

        {/* --- Aftab Hussain --- */}

        <div className="self-start">
          <h1
            className={`mt-78.5 text-gradient text-2xl ${gradient[cardData.theme]}`}
          >
            Aftab Hussain
          </h1>
          <p className="text-blue-base font-semibold text-xs">
            Executive Director – Strategic Development
          </p>
        </div>
        <VcardButton theme={cardData.theme}/>
      </div>

      {/* --- About --- */}

      <About theme={cardData.theme} />

      {/* --- socials --- */}

      <section className="bg-blur p-4 mt-2">
        <h2
          className={`font-bold text-sm text-gradient ${gradient[cardData.theme]} mb-6`}
        >
          Socials
        </h2>
        <div className="flex justify-start items-start gap-4">
          {Object.entries(cardData.socials).map(([key, value]) => (
            <a href={value}>
              <img
                src={`/${key}-logo.svg`}
                alt={`${key} logo`}
                width={32}
                height={32}
              />
            </a>
          ))}
        </div>
      </section>

      <ContactInfo contactData={cardData.contact} theme={cardData.theme} />
    </div>
  );
}
