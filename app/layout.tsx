import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale";

export const metadata: Metadata = {
  title: {
    default: "Emismart | Digital single permit applications for Europe",
    template: "%s | Emismart",
  },
  description:
    "Emismart simplifies, streamlines and digitalises work migration to Europe: single permit and national work permit applications in all 27 EU member states.",
  keywords: ["single permit", "permis unique", "GVVA", "work visa Europe", "EU Blue Card", "immigration Belgium", "immigration Netherlands"],
  openGraph: {
    title: "Emismart",
    description: "Digital work and residence permit applications for all 27 EU member states.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <LocaleProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
