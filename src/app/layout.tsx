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
    { href: "/sample-page", label: "Sample" },
    { href: "/sample-page", label: "Sample" },
    { href: "/sample-page", label: "Sample" },
    { href: "/sample-page", label: "Sample" },
  ];

  return (
    <html lang="ja">
      <body className="min-h-screen flex">
        <Sidebar items={sidebarItems} />
        <div className="flex flex-col flex-grow min-h-screen ml-64">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer name="sample footer" />
        </div>
      </body>
    </html>
  );
}
