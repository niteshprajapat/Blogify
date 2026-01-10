import Header from "../components/Header";
import "./globals.css";

export const metadata = {
    title: "Blogify",
    description: "Create, publish, and manage blogs effortlessly with a fast, modern blogging platform built for writers and creators. ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black/90 text-white antialiased">
                <Header />
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}
