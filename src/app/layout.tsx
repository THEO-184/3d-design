"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html } from "@react-three/drei";
import { CharacterAnimationContextProvider } from "@/context/CharacterAnimations";
import Interface from "@/components/3d-carshow/Interface";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}
      >
         <CharacterAnimationContextProvider>
          
            <Canvas  id="three-canvas-container"  className="w-screen h-screen" shadows>
            <Suspense fallback={<Html><div className="text-white text-3xl">Loading..</div></Html>}>
            <Interface/>
            {children}

            
      </Suspense>
            </Canvas>
         </CharacterAnimationContextProvider>
         


       
      </body>
    </html>
  );
}
