import Image from "next/image";
import Link from "next/link";
import { BlogList } from "./data";
import { BsClock } from "react-icons/bs";

export default function RightBlog() {
  // Map the blog IDs to the correct dynamic blog IDs
  const getBlogId = (id: number) => {
    const idMap: { [key: number]: string } = {
      1: "2", // "Every child deserves a opportunity to dream big"
      2: "3", // "Empowering youth through education opens doors to limitless possibilities" 
      3: "1"  // "Innovative programs inspire the next generation of leaders"
    };
    return idMap[id] || "1";
  };

  return (
    <div className="mt-8 lg:mt-0">
      {BlogList.map((blog) => (
        <Link key={blog.id} href={`/blogs/${getBlogId(blog.id)}`}>
          <div className="flex flex-col md:flex-row gap-3 space-y-2 hover:bg-gray-50 p-4 lg:p-2 rounded-lg transition-colors cursor-pointer">
            <Image
              src={blog.image}
              alt={blog.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full md:w-[260px] h-[180px] rounded-2xl object-cover"
            />
            <div className="w-full md:w-[368px] space-y-2">
              <h3 
                className="text-[#030712] text-base md:text-[20px] font-medium hover:text-[#0B763C] transition-colors leading-tight"
                style={{ fontFamily: "Sora" }}
              >
                {blog.title}
              </h3>
              <p 
                className="text-[#374151] text-sm line-clamp-3 leading-relaxed font-normal"
                style={{ fontFamily: "Manrope" }}
              >
                {blog.description}
              </p>
              <p 
                className="flex items-center gap-1"
                style={{ fontFamily: "Manrope" }}
              >
                <span><BsClock size={12} color="#6B7280" /></span>
                <span className="text-[#374151] text-xs sm:text-sm">{blog.time}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
