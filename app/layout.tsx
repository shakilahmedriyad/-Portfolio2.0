import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveStatusContext from "@/lib/ActiveStatusContext";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Shakil Ahmed | Full Stack developer",
  description:
    "A portfolio page which shows Shakil Ahmed's all knowlede of web development and skills and experiences",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} font-roboto`}>
        <Toaster position="top-right" reverseOrder={false} />
        <ActiveStatusContext>{children}</ActiveStatusContext>
      </body>
    </html>
  );
}
