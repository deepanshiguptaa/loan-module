import startupIndia from "./images/start-up-india.webp";
import mudraYojna from "./images/Mudra-Yojna.png";
import sbi from "./images/SBI.avif";
import pnb from "./images/PNB.jpg";
import hdfc from "./images/HDFC.avif";
import icici from "./images/ICICI-BANK-LOGO.png";
import sba from "./images/SBA.png";
import federalReserve from "./images/federal reserve.png";
import jpMorganChase from "./images/JPmorganChase.png";

const assets = {
  India: {
    govtSchemes: [
      {
        name: "Startup India",
        img: startupIndia,
        desc: "Government initiative to promote innovation and startups.",
      },
      {
        name: "Mudra Yojana",
        img: mudraYojna,
        desc: "Loans for small and micro businesses under Mudra scheme.",
      },
    ],
    psuBanks: [
      {
        name: "SBI",
        img: sbi,
        desc: "State Bank of India - India's largest PSU bank.",
      },
      {
        name: "PNB",
        img: pnb,
        desc: "Punjab National Bank with wide retail lending.",
      },
    ],
    privateBanks: [
      {
        name: "HDFC",
        img: hdfc,
        desc: "Leading private sector bank offering retail & corporate loans.",
      },
      {
        name: "ICICI",
        img: icici,
        desc: "ICICI Bank provides personal, business & startup loans.",
      },
    ],
  },
  USA: {
    govtSchemes: [
      {
        name: "SBA Loans",
        img: sba,
        desc: "Loans backed by Small Business Administration for SMEs.",
      },
    ],
    psuBanks: [
      {
        name: "Federal Reserve",
        img: federalReserve,
        desc: "The central banking system of the USA.",
      },
    ],
    privateBanks: [
      {
        name: "JP Morgan Chase",
        img: jpMorganChase,
        desc: "One of the largest financial institutions in the world.",
      },
    ],
  },
};

export default assets;
