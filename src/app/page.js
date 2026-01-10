import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import LimitSelector from "../components/LimitSelector";
import CategorySelector from "../components/CategorySelector";
import { getBlogs } from "../routes/route";
import { Suspense } from "react";
import BlogCardSkeleton from '../components/BlogCardSkeleton';
import ClearFiltersButton from "../components/ClearFiltersButton";

export default async function Home({ searchParams }) {
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 10;
    const search = (searchParams?.search || "").trim().toLowerCase();
    const category = (searchParams?.category || "").trim().toLowerCase();

    const fetchLimit = 150;
    const { blogs: fetchedBlogs } = await getBlogs(0, fetchLimit);

    const allCategories = [...new Set(fetchedBlogs.map(b => b.category?.toLowerCase()).filter(Boolean))];

    let filteredBlogs = fetchedBlogs;

    if (search) {
        filteredBlogs = filteredBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(search)
        );
    }

    if (category) {
        filteredBlogs = filteredBlogs.filter((blog) =>
            blog.category?.toLowerCase() === category
        );
    }

    const totalFiltered = filteredBlogs.length;
    const totalPages = Math.ceil(totalFiltered / limit);

    const effectivePage = page > totalPages ? 1 : page;
    const offset = (effectivePage - 1) * limit;
    const displayedBlogs = filteredBlogs.slice(offset, offset + limit);

    return (
        <div className="min-h-screen bg-black/90">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Title */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-500 tracking-tight">
                        Stories worth Reading
                    </h1>
                </div>

                {/* Filter Card */}
                <div className="mb-12 lg:mb-16">
                    <div className="
    bg-gray-900/70 backdrop-blur-xl 
    border border-gray-700/50 rounded-2xl 
    shadow-2xl shadow-black/40 overflow-hidden
    transition-all duration-300
  ">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <div className="flex flex-col lg:flex-row flex-wrap gap-6 lg:gap-8 items-end">
                                {/* Search */}
                                <div className="flex-1 min-w-[340px]">
                                    <label htmlFor="search" className="block text-base font-medium text-gray-200 mb-2.5">
                                        Search by Title
                                    </label>
                                    <div className="relative">
                                        <SearchInput initialValue={search} />
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="w-full sm:w-56 lg:w-64">
                                    <label htmlFor="category" className="block text-base font-medium text-gray-200 mb-2.5">
                                        Category
                                    </label>
                                    <CategorySelector
                                        initialValue={category}
                                        categories={allCategories}
                                    />
                                </div>

                                {/* Per Page */}
                                <div className="w-full sm:w-44 lg:w-48">
                                    <label htmlFor="limit" className="block text-base font-medium text-gray-200 mb-2.5">
                                        Per Page
                                    </label>
                                    <LimitSelector initialValue={limit.toString()} />
                                </div>

                                {/* Clear Filters Button */}
                                <div className="w-full sm:w-auto">
                                    <ClearFiltersButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Suspense
                    fallback={
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
                            {[...Array(limit)].map((_, i) => (
                                <BlogCardSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    {displayedBlogs.length === 0 ? (
                        <div className="text-center py-32">
                            <p className="text-3xl font-semibold text-gray-400 mb-4">
                                {search || category ? "Nothing found" : "No posts available"}
                            </p>
                            <p className="text-lg text-gray-500 max-w-lg mx-auto">
                                Try adjusting your filters or search terms
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
                                {displayedBlogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>

                            <div className="mt-12">
                                <Pagination
                                    currentPage={effectivePage}
                                    totalPages={totalPages}
                                    searchParams={searchParams}
                                />
                            </div>
                        </>
                    )}
                </Suspense>
            </div>
        </div>
    );
}