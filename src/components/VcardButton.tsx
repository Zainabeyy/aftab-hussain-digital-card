import { gradientStyle } from "../data/cards";
import type { CardTheme, vCardDataType } from "../data/types";
import { vCardData } from "../data/vCardData";
import { generateVCard, openVCard } from "../utiles/vCard";

export default function VcardButton({
  theme,
  companyName,
}: {
  theme: CardTheme;
  companyName: string;
}) {
  function handleSaveContact() {
    const companyData: vCardDataType | undefined = Object.values(
      vCardData,
    ).find((card) => card.companyName === companyName);

    if (!companyData) {
      console.log("Company not found");
    }
    if (companyData) {
      const vcard = generateVCard(companyData);
      openVCard(vcard, `${companyData.companyName}.vcf`);
    }
  }
  return (
    <button
      type="button"
      onClick={handleSaveContact}
      className={`flex justify-center items-center gap-x-2 py-2 mt-6 w-full ${gradientStyle[theme]}`}
    >
      <img
        src="/add-user-icon.svg"
        alt="save contact icon"
        width={24}
        height={24}
      />
      <span className="text-14 text-white ">Save Contact</span>
    </button>
  );
}
