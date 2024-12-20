import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsProvider from "./StyledComponentsProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nathnael Zelalem",
  description:
    "Welcome to the portfolio website of Nathnael Zelalem, a full-stack developer specializing in modern web and mobile applications.",
  keywords:
    "full-stack developer,Africa , Ethiopia, React, Node.js,Next js, Go portfolio,hire full-stack developer,frontend and backend integration, web developer",
  openGraph: {
    title: "Nathnael Zelalem | Portfolio",
    description:
      "Explore my projects and skills in modern web and mobile development.",
    url: "https://nathnaelzelalem.com",
    siteName: "NathnaelZelame",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with your image URL
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/fav/favicon-16x16.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
      </body>
    </html>
  );
}
