import Link from "next/link";
import { BlogPost } from "../data/blogData"
import Image from "next/image"
import { FaChevronLeft } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

interface BlogHeaderProps {
  blog: BlogPost;
}

export function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <header className="mb-12 space-y-2">
      {/* Logo */}
      <Link href="/blogs" className="mb-4 text-base text-[#1F2937] inline-flex items-center gap-1">
          <FaChevronLeft size={10}/>
          Back
      </Link>

      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-[24px] lg:text-[42px] font-semibold leading-tight text-[#030712] text-balance">
        {blog.title}
      </h1>
      <p className="text-base text-[#1F2937] font-light">
        At Asha Ko Mandir, we believe that change becomes powerful when young people lift each other up. These three bright youths represent more than individual success — they symbolize the strength of unity, collaboration, and shared dreams. 
      </p>
       <p className="text-sm flex items-center gap-1"><span><CiClock2 color="black" /></span><span className="text-[#374151]">Mar 15, 2025</span></p>      
      </div>
      
      {/* Meta information */}
      {/* <div className="mb-8 flex flex-wrap items-center gap-2 text-base text-[#1F2937]">
        <span>Written by {blog.author}</span>
        <span>•</span>
        <span>{blog.description.substring(0, 80)}...</span>
        <span>•</span>
        <span>{blog.readTime}</span>
        <span>•</span>
        <span>{blog.date}</span>
      </div> */}

      {/* Hero Image */}
      <div className="overflow-hidden rounded-[24px]">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          width={0}
          height={0}
          sizes="100vw"
          className="h-[293px] md:h-[411px] w-full object-cover" 
        />
      </div>
    </header>
  )
}
