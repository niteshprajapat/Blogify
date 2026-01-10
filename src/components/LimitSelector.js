'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function LimitSelector({ initialValue = '10' }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const debouncedUpdate = useDebouncedCallback((newLimit) => {
        const params = new URLSearchParams(searchParams);
        params.set('limit', newLimit);
        params.set('page', '1');

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return (
        <select
            defaultValue={initialValue}
            onChange={(e) => debouncedUpdate(e.target.value)}
            className="
        w-full rounded-xl border border-gray-700
        py-4 px-5 bg-gray-800/60 text-gray-100 text-base
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30
        focus:bg-gray-800/80
        transition-all duration-200
        hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10
        backdrop-blur-sm cursor-pointer
      "
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    );
}