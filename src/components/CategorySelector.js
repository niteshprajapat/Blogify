'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function CategorySelector({
    initialValue = '',
    categories = []
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const debouncedUpdate = useDebouncedCallback((newCategory) => {
        const params = new URLSearchParams(searchParams);

        if (newCategory) {
            params.set('category', newCategory);
        } else {
            params.delete('category');
        }

        params.set('page', '1');

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    const uniqueCategories = categories.length > 0
        ? categories
        : ['All', 'technology', 'programming', 'javascript', 'react', 'nextjs', 'tutorial'];

    return (
        <select
            defaultValue={initialValue}
            onChange={(e) => debouncedUpdate(e.target.value)}
            className="min-w-[240px]
        w-full rounded-xl border border-gray-700
        py-4 px-5 bg-gray-800/60 text-gray-100 text-base
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30
        focus:bg-gray-800/80
        transition-all duration-200
        hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10
        backdrop-blur-sm cursor-pointer
      "
        >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
        </select>
    );
}