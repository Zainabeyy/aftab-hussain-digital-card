import { bio, credentials, expertise } from "../data/aboutData";
import { gradientStyle } from "../data/cards";
import type { CardTheme } from "../data/types";
import { ArrowIcon, BadgeIcon } from "./GradientSvg";

export default function About({ theme }: { theme: CardTheme }) {
  return (
    <div>
      {/* --- bio --- */}

      <section className="p-4 bg-blur">
        <h2 className={`text-gradient text-14 ${gradientStyle[theme]} mb-6`}>
          Bio
        </h2>
        <div className="text-blue-base">
          {bio.map((item, index) => (
            <p key={index} className="mt-4">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* --- expertise --- */}

      <section className="bg-blur p-4 mt-2 sm:mt-3">
        <h2
          className={`text-14 text-gradient ${gradientStyle[theme]} mb-6`}
        >
          Core Expertise
        </h2>
        {expertise.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-start gap-x-2 gap-y-4"
          >
            <ArrowIcon theme={theme} className="w-3.5 sm:w-4 h-auto m-1" />
            <p>{item}</p>
          </div>
        ))}
      </section>

      {/* --- credentials --- */}

      <section className="bg-blur p-4 mt-2 sm:mt-3">
        <h2
          className={`text-14 text-gradient ${gradientStyle[theme]} mb-6`}
        >
          Professional Credentials
        </h2>
        {credentials.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-start gap-x-2 gap-y-4"
          >
              <BadgeIcon theme={theme} className="w-3 sm:w-3.5 h-auto mt-1"/>
            <p>{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
