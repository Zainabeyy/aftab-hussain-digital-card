import { type contactType, type CardTheme } from "../assets/data/types";
import { AtIcon, GlobeIcon, LocationIcon, PhoneIcon } from "./GradientSvg";

export default function ContactInfo({
  contactData,
  theme,
}: {
  contactData: contactType;
  theme: CardTheme;
}) {
  const gradient = {
    green: "gradient-blue-green",
    blue: "gradient-blue",
    purple: "gradient-purple",
  };
  return (
    <section className="bg-blur p-4 mt-2 flex flex-col gap-y-4 mb-4">
      <h2 className={`font-bold text-sm text-gradient ${gradient[theme]}`}>
        Contact Info
      </h2>
      <div className="flex justify-start items-center gap-x-2">
        <PhoneIcon theme={theme} />
        <div className="flex flex-col gap-y-1">
          {contactData.phone.map((item, index) => (
            <p key={index} className="font-medium text-xs">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="verticle-line" />
      <div className="flex justify-start items-center gap-x-2">
        <AtIcon theme={theme} />
        <p className="font-medium text-xs">{contactData.email}</p>
      </div>

      <div className="verticle-line" />

      <div className="flex justify-start items-center gap-x-2">
        <div className="shrink-0">
          <LocationIcon theme={theme} />
        </div>
        <p className="font-medium text-xs">{contactData.location}</p>
      </div>

      <div className="verticle-line" />

      <div className="flex justify-start items-center gap-x-2">
        <div className="shrink-0">
          <GlobeIcon theme={theme} />
        </div>
        <a href={contactData.website.url} className="font-medium text-xs">
          {contactData.website.name}
        </a>
      </div>
    </section>
  );
}
