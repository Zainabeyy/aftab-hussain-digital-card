import type { cardsData } from "./types";

const cards: cardsData = {
  gsee: {
    logo: "GSEE",
    companyName: "GSEE",
    theme: "green",
    socials: {
      linkedin: "",
      facebook: "",
      twitter: "",
    },
    contact: {
      phone: ["+966 55 340 2439", "+966 13 358 8803"],
      email: "ahussain@gulfsource.sa",
      location:
        "13th Floor, Al Bargash Tower, Prince Turki Bin Abdulaziz Street Al-Kurnaish District, Al-Khobar 34412, Kingdom of Saudi Arabia",
      website: {
        name: "gulfsource.sa",
        url: "https://gulfsource.sa/",
      },
    },
  },
  gssi: {
    logo: "GSSI",
    theme: "blue",
    companyName: "GSSI",
    socials: {
      linkedin: "",
      facebook: "",
      twitter: "",
    },
    contact: {
      phone: ["+966 55 340 2439", "+966 13 358 8803"],
      email: "ahussain@gulfsource.com.sa",
      location:
        "13th Floor, Al Bargash Tower, Prince Turki Bin Abdulaziz Street Al-Kurnaish District, Al-Khobar 34412, Kingdom of Saudi Arabia",
      website: {
        name: "gulfsource.sa",
        url: "https://gulfsource.sa/",
      },
    },
  },
  synergyOperations: {
    logo: "synergy",
    theme: "purple",
    companyName: "Synergy Operations Consulting",
    socials: {
      linkedin: "",
      facebook: "",
      twitter: "",
    },
    contact: {
      phone: ["+966 55 340 2439", "+966 13 358 8803"],
      email: "ahussain@synergyoperations.com.sa",
      location:
        "13th Floor, Al Bargash Tower, Prince Turki Bin Abdulaziz Street Al-Kurnaish District, Al-Khobar 34412, Kingdom of Saudi Arabia",
      website: {
        name: "synergyoperations.com.sa",
        url: "https://gulfsource.sa/",
      },
    },
  },
};

export const gradientStyle = {
  green: "gradient-blue-green",
  blue: "gradient-blue",
  purple: "gradient-purple",
};

export default cards;
