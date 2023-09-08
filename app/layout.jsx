import Link from "next/link";
import { inter } from "@/fonts";
import './globals.css'

export const metadata= {
    title: {
        default: 'Next Home',
        template: '%s | Next'
    }
  }

export default function Rootlayout({children}) {
    return(
        <html lang="en">
        <head>  
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={`px-8 py-8 bg-black text-white ${inter.className} `} >
        <main className="py-2 flex flex-col items-center justify-center w-full h-screen">
        <header >
        <ul className="flex gap-2 text-cyan-500">
            <li className="hover:underline"><Link href="/">Home</Link></li>
            <li className="hover:underline"><Link href="/reviews">reviews</Link></li>
            <li className="hover:underline"><Link href="/about">about</Link></li>
            </ul>
        </header>
            {children}  
        </main>
        </body>
        </html>
    );
};
