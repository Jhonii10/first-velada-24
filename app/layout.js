import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "la velada",
  description: "la velada del año ",
  manifest:"/manifest.json",
  icons:{
    apple:"/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="theme-color" content="#ffffff"/>
       </head>
      <body className={quicksand.className}>
      <div className="bg-black text-white font-bold">
      {children}
      </div>
      </body>
    </html>
  );
}
