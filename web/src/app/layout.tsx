import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamJuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "NLW SpaceTime",
  description:
    "Uma cápsula do tempo construida com React.js, Next.js, TailwindCSS e Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
