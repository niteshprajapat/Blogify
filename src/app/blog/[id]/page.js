import { notFound } from "next/navigation";
import { getBlogById } from "../../../routes/route";
import Image from "next/image";


export default async function BlogPost({ params }) {
    const blog = await getBlogById(params.id);

    if (!blog) {
        notFound();
    }

    return (
        <div className="bg-black/90">


            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <article>
                    <h1 className="
            text-xl lg:text-4xl font-bold 
            text-indigo-400 mb-3 line-clamp-2 
            group-hover:text-indigo-400 
            transition-colors duration-300
          ">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-gray-600 mb-8">


                        <time
                            dateTime={blog.created_at}
                            className="text-gray-500"
                        >
                            {new Date(blog.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </time>

                        <span className="
              inline-block px-3 py-1 mb-3 
              bg-indigo-950/70 text-indigo-300 
              text-xs font-medium rounded-full 
              uppercase tracking-wide
            ">
                            {blog.category}
                        </span>
                    </div>

                    {blog.photo_url && (
                        // <img
                        //     src={blog.photo_url}
                        //     alt={blog.title}
                        //     className="w-full h-96 object-cover rounded-lg mb-10"
                        // />

                        <Image
                            src={blog.photo_url}
                            alt={blog.title}
                            className="w-full h-96 object-cover rounded-lg mb-10"
                            width={500}
                            height={300}
                        />
                    )}

                    <div
                        className="prose prose-lg max-w-none text-gray-400 text-base"
                        dangerouslySetInnerHTML={{ __html: blog.content_html }}
                    />


                </article>
            </div>
        </div>
    );
}
