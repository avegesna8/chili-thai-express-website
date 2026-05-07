import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newnan Chili Thai Express",
  description: "Fresh Thai favorites, express bowls, catering, and rewards in Newnan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
