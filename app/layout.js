import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "./Components/NavBar/NavBar";
import SubNavbar from "./Components/NavBar/SubNavbar.jsx/SubNavbar";
import FirstFooter from "./Components/Footer/FirstFooter";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simply Good Food",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <NavBar></NavBar>
        <SubNavbar></SubNavbar>
        <AuthProvider>
          <div>
            {children}
          </div>
        </AuthProvider>
        <FirstFooter></FirstFooter>
      </body>
    </html>
  );
}
