import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/organism/Header";
import Footer from "./components/atoms/Footer";
import Sidebar from "./components/organism/Sidebar";

export const metadata: Metadata = {
  title: "next template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarItems = [
    { href: "/", label: "Home" },
    { href: "/sample-page", label: "Sample" },
  ];

  return (
    <html lang="ja">
      <body className="min-h-screen flex">
        <Sidebar items={sidebarItems} />
        <div className="flex flex-col flex-grow min-h-screen ml-64">
          <Header className="fixed w-full z-10 h-16" />
          <main className="flex-grow mt-16 mb-16 overflow-y-auto">
            {children}
          </main>
          <Footer name="sample footer" className="fixed w-full bottom-0 h-16" />
        </div>
      </body>
    </html>
  );
}
