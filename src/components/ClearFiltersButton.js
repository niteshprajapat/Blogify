'use client';

import { useRouter } from 'next/navigation';

export default function ClearFiltersButton() {
    const router = useRouter();

    const handleClear = () => {
        router.push('/', { scroll: false });
    };

    return (
        <button
            onClick={handleClear}
            className="
        px-8 py-4 rounded-xl font-medium text-base
        bg-gray-800/80 text-gray-300 border border-gray-700
        hover:bg-gray-700 hover:text-white hover:border-gray-600
        transition-all duration-300 transform hover:-translate-y-0.5
        shadow-md hover:shadow-lg
        min-w-[160px]
      "
        >
            Clear Filters
        </button>
    );
}