import { Fira_Code as FontMono, Inter as FontSans, Oswald, Overlock, Shippori_Antique, Spinnaker } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSpinnaker = Spinnaker({
  subsets: ["latin"],
  variable: "--font-spinnaker",
  weight: "400"
});


export const fontOverlock = Overlock({
  subsets: ["latin"],
  variable: "--font-overlock",
  weight: "400"
});

export const fontOswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "400"
});

export const fontShippori = Shippori_Antique({
  subsets: ["latin"],
  variable: "--font-Shippori",
  weight: "400"
});



