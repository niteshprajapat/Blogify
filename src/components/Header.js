import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-black shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-white"
                >
                    Blogify
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-white/80 hover:text-white transition"
                    >
                        Home
                    </Link>

                </div>
            </nav>
        </header>
    );
}
