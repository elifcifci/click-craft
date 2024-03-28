import { inter } from "@/app/fonts";
import { ReactNode } from "react";
import Header from "../organisms/Header";

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
      <main className="flex-1">{children}</main>
      <footer className="flex items-center justify-center p-4">TEST</footer>
    </main>
  );
};
