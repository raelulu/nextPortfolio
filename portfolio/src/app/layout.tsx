import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gorae's portfolio",
  description: "Generated by gorae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h1>
          <a href="/">GO! RAE</a>
        </h1>
        <p>Front-End Dev.</p>

        {children}
      </body>
    </html>
  );
}
