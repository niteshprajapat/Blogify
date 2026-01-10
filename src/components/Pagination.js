import Link from "next/link";

export default function Pagination({
    currentPage,
    totalPages,
    searchParams,
}) {
    if (totalPages <= 1) return null;

    const createHref = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        return `/?${params.toString()}`;
    };

    return (
        <div className="flex justify-center items-center gap-4 mt-12 flex-wrap">
            {currentPage > 1 && (
                <Link
                    href={createHref(currentPage - 1)}
                    className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors"
                >
                    ← Previous
                </Link>
            )}

            <span className="px-6 py-3 bg-gray-900/50 text-gray-300 rounded-lg">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages && (
                <Link
                    href={createHref(currentPage + 1)}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Next →
                </Link>
            )}
        </div>
    );
}