import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keziah Lonoy",
  description:
    "Portfolio of Keziah Lonoy, a designer crafting intentional, human-centered experiences.",
  openGraph: {
    title: "Keziah Lonoy",
    description: "Portfolio of Keziah Lonoy — Logo, UI/UX, and Graphic design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
