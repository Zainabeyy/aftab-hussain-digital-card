import type { vCardDataType } from "../data/types";

export function generateVCard(data: vCardDataType): string {
  const phoneLines = data.phones
    .map((number) => `TEL;TYPE=WORK,VOICE:${number}`)
    .join("\n");
  return `
BEGIN:VCARD
VERSION:3.0
N:${data.lastName ?? ""};${data.firstName ?? ""};;;
FN:${data.personName}
ORG:${data.companyName}
TITLE:${data.title ?? ""}
${phoneLines}
EMAIL;TYPE=WORK:${data.email}
URL:${data.website ?? ""}
END:VCARD
`.trim();
}
