export type CardTheme = "green" | "blue" | "purple";

export type CardLogoNames = "GSEE" | "GSSI" | "synergy";

export type contactType = {
  phone: string[];
  email: string;
  location: string;
  website: {
    name: string;
    url: string;
  };
};

export type cardData = {
  logo: CardLogoNames;
  theme: CardTheme;
  companyName: string;
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
  contact: contactType;
};

export type cardsData = {
  [key: string]: cardData;
};

export type vCardDataType = {
  firstName: string;
  lastName: string;
  personName: string;
  companyName: string;
  title: string;
  phones: string[];
  email: string;
  website: string;
};
