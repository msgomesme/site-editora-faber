import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.editorafaber.com.br"),
  title: "Editora FABER | Literatura que acolhe",
  description:
    "Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas.",
  icons: {
    icon: "/logo-faber-transparent.png",
    shortcut: "/logo-faber-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.editorafaber.com.br",
    siteName: "Editora FABER",
    title: "Literatura que acolhe. Histórias que transformam.",
    description:
      "Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editora FABER | Literatura que acolhe",
    description:
      "Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
