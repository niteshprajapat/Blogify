
const BASE_URL = "https://api.slingacademy.com/v1/sample-data";

export async function getBlogs(offset = 0, limit = 10) {
    const res = await fetch(
        `${BASE_URL}/blog-posts?offset=${offset}&limit=${limit}`,
        { cache: "force-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    console.log("BLOGSS => ", data);
    return {
        blogs: data.blogs || [],
        total: data.total_blogs || 0,
    };
}

export async function getBlogById(id) {
    const res = await fetch(`${BASE_URL}/blog-posts/${id}`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch blog by id");
    }

    const data = await res.json();
    console.log("BLOGS BY ID => ", data);
    return data.blog || null;
}