import Link from "next/link";
import Image from "next/image";


export default function BlogCard({ blog }) {
    return (
        <div className="
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-2xl hover:shadow-indigo-500/10
">



            <Link
                href={`/blog/${blog.id}`}
                className="group block h-full transition-all duration-300 hover:-translate-y-2"
            >
                <div className="
        bg-gray-900/80 backdrop-blur-sm 
        border border-gray-800/60 rounded-2xl 
        overflow-hidden shadow-lg shadow-black/30
        hover:shadow-2xl hover:shadow-indigo-900/20
        transition-all duration-300
      ">
                    {blog.photo_url && (
                        <div className="relative overflow-hidden aspect-[16/9]">
                            {/* <img
                                src={blog.photo_url}
                                alt={blog.title}
                                className="
                w-full h-full object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
                                loading="lazy"
                            /> */}

                            <Image
                                src={blog.photo_url}
                                alt={blog.title}
                                className="
                w-full h-full object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
                                loading="lazy"
                                width={500}
                                height={300}
                            />


                            <div className="
              absolute inset-0 bg-gradient-to-t 
              from-black/60 via-transparent to-transparent 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500
            " />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6 lg:p-7">
                        {/* Category Badge */}
                        {blog.category && (
                            <span className="
              inline-block px-3 py-1 mb-3 
              bg-indigo-950/70 text-indigo-300 
              text-xs font-medium rounded-full 
              uppercase tracking-wide
            ">
                                {blog.category}
                            </span>
                        )}

                        {/* Title */}
                        <h2 className="
            text-xl lg:text-2xl font-bold 
            text-gray-100 mb-3 line-clamp-2 
            group-hover:text-indigo-400 
            transition-colors duration-300
          ">
                            {blog.title}
                        </h2>

                        {/* Description */}
                        <p className="
            text-gray-400 text-base 
            mb-5 line-clamp-3 leading-relaxed
          ">
                            {blog.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm">
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

                            <span className="text-gray-500">
                                {Math.ceil(blog.description?.length / 200) || 3} min read
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}