import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-black shadow-md">
            <nav className="container mx-auto px-4 py-4 flex items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-white"
                >
                    Blogify
                </Link>
                <Link href="/top-blogs" className="ml-16 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Top Visited Blogs
                </Link>
            </nav>
        </header>
    );
}
