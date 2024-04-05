import { inter } from "@/app/fonts";
import { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <main className={`${inter.className} ${className}`}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </main>
  );
};
