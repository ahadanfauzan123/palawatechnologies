import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { GrHomeRounded } from "react-icons/gr";
import { ThemeProvider } from "../../provider/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "palawa",
  description: "Palawa Technology Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <GrHomeRounded className="text-lg text-neutral-500 dark:text-white" />,
    },
    {
      name: "Product",
      link: "/product",
      icon: <GrHomeRounded className="text-lg text-neutral-500 dark:text-white" />,
      // element: [
      //   {name:"Management Asset", desc: "GeoTech Product",link: "/"},
      //   {name:"Management Asset", desc: "GeoTech Product",link: "/"},
      //   {name:"Management Asset", desc: "GeoTech Product",link: "/"},
      // ]
    },
    {
      name: "Services",
      link: "/services",
      icon: <GrHomeRounded className="text-lg text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <FloatingNav navItems={navItems} />
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
