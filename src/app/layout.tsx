import type { Metadata } from "next";
import { MainLayout } from "@/component/templates/MainTemplate";
import StoreProvider from "./redux/StoreProvider";
import "../styles/globals.css";

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
      <body>
        <StoreProvider>
          <MainLayout>{children}</MainLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
