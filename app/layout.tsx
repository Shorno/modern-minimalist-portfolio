import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Shorno's Portfolio",
    description: "Modern and Minimalist Next.js Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
