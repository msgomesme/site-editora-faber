import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.editoraroel.com.br"),
  title: "ROEL Editora | Literatura que acolhe",
  description:
    "Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas.",
  icons: {
    icon: "/logo-roel-transparent-cropped.png",
    shortcut: "/logo-roel-transparent-cropped.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.editoraroel.com.br",
    siteName: "Editora ROEL",
    title: "Literatura que acolhe. Histórias que transformam.",
    description:
      "Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROEL Editora | Literatura que acolhe",
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
