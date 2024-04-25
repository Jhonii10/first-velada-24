import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "la 1 velada",
  description: "la primera velada del año ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      <div className="bg-black text-white font-bold">
      {children}
      </div>
      </body>
    </html>
  );
}
