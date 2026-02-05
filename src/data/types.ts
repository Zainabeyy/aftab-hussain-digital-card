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
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
  contact: contactType;
};

export type cardsData = {
  [key: string]: cardData;
}

export type vCardDataType = {
  personName: string;
  firstName: string;
  lastName: string;
  title: string;
  companyName: string;
  email: string;
  website: string;
  phones: string[];
}