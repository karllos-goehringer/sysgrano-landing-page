import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sysgrano | Gestão Inteligente para o Cafeicultor",
  description:
    "A Sysgrano é o app que ajuda o cafeicultor a gerenciar lavoura, safra e produtividade na palma da mão.",
  icons: {
    icon: "/assets/logos/sysgrano_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
