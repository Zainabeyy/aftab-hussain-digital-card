import { bio, credentials, expertise } from "../data/aboutData";
import type { CardTheme } from "../data/types";
import { ArrowIcon, BadgeIcon } from "./GradientSvg";

export default function About({ theme }: { theme: CardTheme }) {
  const gradient = {
    green: "gradient-blue-green",
    blue: "gradient-blue",
    purple: "gradient-purple",
  };
  return (
    <div>
      {/* --- bio --- */}

      <section className="p-4 bg-blur">
        <h2 className={`text-gradient text-sm ${gradient[theme]} mb-6`}>Bio</h2>
        <div className="text-xs font-medium leading-[150%] text-blue-base">
          {bio.map((item, index) => (
            <p key={index} className="mt-4">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* --- expertise --- */}

      <section className="bg-blur p-4 mt-2">
        <h2
          className={`font-bold text-sm text-gradient ${gradient[theme]} mb-6`}
        >
          Core Expertise
        </h2>
        {expertise.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-start gap-x-2 gap-y-4"
          >
            <ArrowIcon theme={theme} className="w-3 h-auto m-1" />
            <p className="font-medium text-xs leading-[150%]">{item}</p>
          </div>
        ))}
      </section>

      {/* --- credentials --- */}

      <section className="bg-blur p-4 mt-2">
        <h2
          className={`font-bold text-sm text-gradient ${gradient[theme]} mb-6`}
        >
          Professional Credentials
        </h2>
        {credentials.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-start gap-x-2 gap-y-4"
          >
            <div className={`shrink-0 w-4 h-4 p-1`}>
              <BadgeIcon theme={theme} />
            </div>
            <p className="font-medium text-xs leading-[150%]">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
