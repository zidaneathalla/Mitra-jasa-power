import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/globals.css";

export const metadata = {
  title: "PT Mitra Jasa Power",
  description: "Jasa pengiriman kendaraan, alat berat, cargo project, dll.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
