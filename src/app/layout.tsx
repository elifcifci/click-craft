import { MainLayout } from "@/component/templates/MainTemplate";
import StoreProvider from "./redux/StoreProvider";
import "../styles/globals.css";

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
          <div id="modal-root"/>
        </StoreProvider>
      </body>
    </html>
  );
}
