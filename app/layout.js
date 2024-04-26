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

 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="theme-color" content="#ffffff"/>
          <meta name="google-site-verification" content="ynKWYpMSu_6ZkMqSa6ozwnW7d924nn2Tmxpru3b7v1c" />
       </head>
      <body className={quicksand.className}>
      <div className="bg-black text-white font-bold">
      {children}
      </div>
      </body>
    </html>
  );
}
