import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "./fonts";
import { MainLayout } from "@/component/templates/MainTemplate";

export const metadata: Metadata = {
  title: "Click and Craft",
  description: "Build Powerful Frontend Apps Without Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MainLayout>
        <main>{children}</main>
      </MainLayout>
    </html>
  );
}
