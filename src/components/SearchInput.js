'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';

export default function SearchInput({ initialValue = '' }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [value, setValue] = useState(initialValue);

    const debouncedUpdate = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);

        if (term.trim()) {
            params.set('search', term.trim());
        } else {
            params.delete('search');
        }

        params.set('page', '1');

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 400);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <div className="relative flex-1 min-w-[240px]">
            <input
                type="search"
                placeholder="Search by title (e.g. react, next.js, typescript...)"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value;
                    setValue(newValue);
                    debouncedUpdate(newValue);
                }}
                className="
          w-full rounded-xl border border-gray-200
          py-4 pl-5 pr-14 text-gray-900 text-base
          placeholder:text-gray-400
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
          bg-white transition-all duration-200
          hover:border-gray-300 hover:shadow-sm
        "
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    );
}