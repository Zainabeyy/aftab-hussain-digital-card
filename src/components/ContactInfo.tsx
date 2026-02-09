import { gradientStyle } from "../data/cards";
import { type contactType, type CardTheme } from "../data/types";
import { AtIcon, GlobeIcon, LocationIcon, PhoneIcon } from "./GradientSvg";

export default function ContactInfo({
  contactData,
  theme,
}: {
  contactData: contactType;
  theme: CardTheme;
}) {
  return (
    <section className="bg-blur p-4 mt-2 flex flex-col gap-y-4 mb-4">
      <h2 className={`text-14 text-gradient ${gradientStyle[theme]}`}>
        Contact Info
      </h2>
      <div className="flex justify-start items-center gap-x-2">
        <PhoneIcon theme={theme} className="w-4 h-auto shrink-0 sm:w-5"/>
        <div className="flex flex-col gap-y-1">
          {contactData.phone.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="verticle-line" />
      <div className="flex justify-start items-center gap-x-2">
        <AtIcon theme={theme} className="w-4 h-auto shrink-0 sm:w-5"/>
        <p>{contactData.email}</p>
      </div>

      <div className="verticle-line" />

      <div className="flex justify-start items-center gap-x-2">
        <LocationIcon theme={theme} className="w-4 h-auto shrink-0 sm:w-5"/>
        <p>{contactData.location}</p>
      </div>

      <div className="verticle-line" />

      <div className="flex justify-start items-center gap-x-2">
        <GlobeIcon theme={theme} className="w-4 sm:w-5 h-auto shrink-0" />
        <a href={contactData.website.url}>{contactData.website.name}</a>
      </div>
    </section>
  );
}
