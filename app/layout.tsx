import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Emismart | Digital single permit applications for Europe",
    template: "%s | Emismart",
  },
  description:
    "Emismart simplifies, streamlines and digitalises work migration to Europe, starting with single permit applications in Belgium, the Netherlands, France, Germany and Luxembourg.",
  keywords: ["single permit", "permis unique", "GVVA", "work visa Europe", "EU Blue Card", "immigration Belgium", "immigration Netherlands"],
  openGraph: {
    title: "Emismart",
    description: "Digital single permit applications for Belgium, the Netherlands, France, Germany and Luxembourg.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
