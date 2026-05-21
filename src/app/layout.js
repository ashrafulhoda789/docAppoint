import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['500', '600', '700', '800', '900'],
  subsets: ["latin"],
});


export const metadata = {
  title: "DocAppoint",
  description: "Smart Healthcare Platform",
  keywords: [
    "doctor appointment",
    "healthcare",
    "book doctor online",
    "medical booking system",
    "hospital appointment",
    "DocAppoint"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
