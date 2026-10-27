import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Readex_Pro } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SARL Enviromed — Equipment, modular solutions and construction in Algeria",
  description: "Equipment supply, modular workspaces and construction. A local point of contact to move your projects forward in Algeria.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logos/enviromed-icon-180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${readex.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#2a4560] selection:bg-[#028698]/20 selection:text-[#012a50]">
        {children}
      </body>
    </html>
  );
}
