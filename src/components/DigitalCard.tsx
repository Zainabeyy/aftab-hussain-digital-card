import { gradientStyle } from "../data/cards";
import type { cardData } from "../data/types";
import About from "./About";
import ContactInfo from "./ContactInfo";
import ImageLoad from "./ImageLoad";
import VcardButton from "./VcardButton";

export default function DigitalCard({ cardData }: { cardData: cardData }) {
  const bgImg = {
    GSEE: "pixel-map.svg",
    GSSI: "pixel-map.svg",
    synergy: "synergy-bg.svg",
  };
  return (
    <main
      className={`relative p-4 max-w-screen min-h-screen flex flex-col items-center ${cardData.logo === "synergy" ? "font-Aptos" : "font-Montserrat"}`}
    >
      <div
        className={`${gradientStyle[cardData.theme]} h-108 w-full absolute top-0 left-0 -z-1`}
      />
      <img
        src={`/${bgImg[cardData.logo]}`}
        alt="background"
        className={`absolute -top-19 left-0 -z-1 w-full max-h-72.5 sm:max-h-86 h-full`}
      />
      <ImageLoad
        src={`/${cardData.logo}-Logo.svg`}
        alt="company logo"
        className="mx-auto block mt-10 sm:mt-12 mb-12 sm:mb-14 w-70 sm:w-80 h-auto"
      />
      <section className="flex flex-col items-start bg-blur h-full">
        <div className="p-1 bg-white relative -top-9 self-center">
          <ImageLoad
            src="/Aftab-Hussain.webp"
            alt="Aftab Hussain image"
            className="w-full h-auto"
          />
        </div>

        {/* --- Aftab Hussain --- */}
        <div className="-mt-3 w-full">
          <h1
            className={`text-gradient text-2xl sm:text-4xl ${gradientStyle[cardData.theme]}`}
          >
            Aftab Hussain
          </h1>
          <p className="text-blue-base font-semibold">
            Executive Director – Strategic Development
          </p>
          <VcardButton
            theme={cardData.theme}
            companyName={cardData.companyName}
          />
        </div>
      </section>

      {/* --- About --- */}

      <About theme={cardData.theme} />

      {/* --- socials --- */}

      <section className="bg-blur ">
        <h2
          className={`text-14 text-gradient ${gradientStyle[cardData.theme]} mb-6`}
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
    </main>
  );
}
