import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Maitre Ugo AYIVI",
  description: "Site officiel - avocat",
};

export default function RootLayout({ children }) {
  return (
   <html className="h-full" lang="fr">
      <body className="min-h-full flex flex-col">
        <header>
            <Navbar/>
        </header>
       <main className="bg-yellow-50 grow">
        {children}
       </main>
        <Footer/>
      </body>
    </html>
  );
}
