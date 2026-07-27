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
    title: "Editora ROEL | Livros que atravessam gerações",
    description:
      "Histórias para leitores de 10 a 88 anos. Descubra o catálogo da Editora ROEL e envie seu original.",
    icons: {
      icon: "/logo-roel.svg",
      shortcut: "/logo-roel.svg",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: origin,
      siteName: "Editora ROEL",
      title: "Livros que atravessam gerações.",
      description:
        "Histórias para leitores de 10 a 88 anos — feitas para ficar.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Editora ROEL — Livros que atravessam gerações",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Editora ROEL | Livros que atravessam gerações",
      description:
        "Histórias para leitores de 10 a 88 anos — feitas para ficar.",
      images: [`${origin}/og.png`],
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
