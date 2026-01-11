import { getBlogs } from "../../routes/route";
import BlogCard from "../../components/BlogCard";

export const metadata = {
    title: "Top Visited Blogs - Most Popular Posts",
    description: "Discover the most popular and most-read blog posts",
};

export default async function TopBlogs() {
    const fetchLimit = 30;
    const { blogs: allBlogs } = await getBlogs(0, fetchLimit);

    // create to show random top visited blogs, as per dont have such attribute to find top blogs on the basis of read count or view. so i created this 
    const blogsWithViews = allBlogs.map(blog => ({
        ...blog,
        views: Math.floor(Math.random() * 9900) + 100,
    }));

    const topBlogs = blogsWithViews.sort((a, b) => b.views - a.views).slice(0, 20);


    return (
        <div className="min-h-screen bg-black/90">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-500 tracking-tight">
                        Top Visited Blogs
                    </h1>
                </div>


                {topBlogs.length === 0 ? (
                    <div className="text-center py-32">
                        <p className="text-3xl font-semibold text-gray-400 mb-4">
                            No popular posts yet
                        </p>
                        <p className="text-lg text-gray-500">
                            Check back later or explore all blogs!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {topBlogs.map((blog) => (
                            <div key={blog.id} className="relative">
                                {/* Badge for top vsited  */}
                                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-indigo-600/90 text-white text-sm font-medium rounded-3xl shadow-lg backdrop-blur-sm ">
                                    Top visited
                                </div>

                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}