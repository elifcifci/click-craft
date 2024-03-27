import { inter } from "@/app/fonts";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const links = [{ slug: "/", label: "Home" }];

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={`${inter.className} ${className}`}>
      <header className="flex items-center justify-center bg-slate-900 p-4">TEST</header>
      <main className="flex-1">{children}</main>
      <footer className="flex items-center justify-center p-4">TEST</footer>
    </div>
  );
};
