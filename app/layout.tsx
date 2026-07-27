import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
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
      url: origin,
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
}

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
