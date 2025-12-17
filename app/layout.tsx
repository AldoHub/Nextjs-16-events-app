import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";

//components
import PixelBlast from '@/components/PixelBlast';
import Navbar from "@/components/Navbar";

const  schibstedGrotesk =  Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martianMono =Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent App",
  description: "The hub for all the events in the DevEvent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
      <Navbar/>
      <div style={{ width: '100%', height: '600px', position: 'absolute', zIndex: '-1', opacity: '0.5'}}>
      
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#213141ff"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
    </div>
    
    <main>
      {children}
    </main>
        
      </body>
    </html>
  );
}

// RESOURCES: https://jsmastery.com/video-kit/93f20ce7-ace5-4a74-997d-3f8262f3e0a3