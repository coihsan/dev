import "./globals.css";
import { Inter } from "next/font/google";
import Overlay from "./UI/Overlay";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "˗ˏˋ Ihsan ˎˊ",
  description: "Resume Page for Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Overlay />
        </main>
      </body>
    </html>
  );
}
