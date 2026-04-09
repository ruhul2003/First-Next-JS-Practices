import Link from "next/link";
const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: "Getting Started with MERN Stack",
            author: "Ruhul Amin",
            date: "2026-04-01",
            category: "Web Development",
            image: "https://i.ibb.co/mern.jpg",
            description: "Learn how to build full-stack applications using MongoDB, Express, React, and Node.js.",
            tags: ["MERN", "JavaScript", "React", "Node.js"]
        },
        {
            id: 2,
            title: "Understanding JavaScript Closures",
            author: "Ruhul Amin",
            date: "2026-03-25",
            category: "JavaScript",
            image: "https://i.ibb.co/js.jpg",
            description: "A deep dive into closures in JavaScript and how they work behind the scenes.",
            tags: ["JavaScript", "Closures", "Functions"]
        },
        {
            id: 3,
            title: "Mastering Tailwind CSS",
            author: "Ruhul Amin",
            date: "2026-03-15",
            category: "Frontend",
            image: "https://i.ibb.co/tailwind.jpg",
            description: "Build modern and responsive UI faster using Tailwind CSS utility classes.",
            tags: ["Tailwind", "CSS", "Frontend"]
        },
        {
            id: 4,
            title: "Data Structures & Algorithms with C++",
            author: "Ruhul Amin",
            date: "2026-03-05",
            category: "DSA",
            image: "https://i.ibb.co/dsa.jpg",
            description: "Learn essential data structures and algorithms concepts using C++.",
            tags: ["C++", "DSA", "Algorithms"]
        }
    ];



    return (
        
        <div className="w-9/12 mx-auto">
            <h1 className="text-5xl font-bold text-center mt-30 mb-10">Blogs</h1>
            <div className="grid gap-5 grid-cols-3 mt-10">
            

            {blogs.map (blog => 

                <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                    <h1 className="text-xl font-bold text-gray-800">{blog.title}</h1>
                    <p className="text-gray-600 pt-2">{blog.description}</p>

                    <Link href='/' className="text-blue-500 hover:text-blue-700">
                        Read More
                    </Link>
                </div>

            )}
        </div>
        </div>
    );
};

export default Blogs;