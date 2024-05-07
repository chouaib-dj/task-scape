import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TaskScape",
  description:
    "Discover TaskScape, the dynamic task management app. Seamlessly manage tasks across customizable columns. Add, update, or delete tasks effortlessly. Customize columns to reflect your workflow stages.",
  icons: {
    icon: [
      { url: "/logo/icon.png" },
      { url: "/logo/dark-icon.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
