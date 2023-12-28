import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.scss";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
  description: "A melhor loja de venda de sneakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-icons-png.flaticon.com/512/2589/2589903.png"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
