import type { Metadata } from "next";
import "./globals.css";
// import { Yantramanav } from 'next/font/google' 
import { Great_Vibes } from 'next/font/google'
const inter = Great_Vibes({
  subsets: ['latin'],
  weight: ['400']
})

// const inter = Yantramanav({
//   subsets: ['latin'],
//   weight:["400" , "500"]
// })
console.log(inter);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}