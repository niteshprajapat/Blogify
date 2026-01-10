import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-xl">Page not found</p>
                <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
                    ← Return to Home
                </Link>
            </div>
        </div>
    );
}