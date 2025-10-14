import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Support both interfaces for flexibility
interface BlogPost {
  id: number
  title: string
  description: string
  image: string
}

interface BlogCardPropsWithPost {
  post: BlogPost
  category?: never
  title?: never
  description?: never
  image?: never
}

interface BlogCardPropsWithFields {
  post?: never
  category?: string
  title: string
  description: string
  image: string
  id?: number
}

type BlogCardProps = BlogCardPropsWithPost | BlogCardPropsWithFields

export function BlogCard(props: BlogCardProps) {
  // Handle both prop patterns
  const { post } = props as BlogCardPropsWithPost
  const { category, title, description, image, id } = props as BlogCardPropsWithFields
  
  const blogData = post || { id: id || 1, title, description, image }
  const blogCategory = category

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full lg:w-[418px] h-[409px]">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={blogData.image || "/assets/blog1.png"} 
          alt={blogData.title} 
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category Badge (optional) */}
        {blogCategory && (
          <div className="mb-2">
            <span className="inline-block rounded-full bg-[#0B763C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0B763C]">
              {blogCategory}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 
          className="text-lg md:text-[20px] font-medium text-[#030712] line-clamp-2 leading-snug hover:text-[#0B763C] transition-colors"
          style={{ fontFamily: "Sora" }}
        >
          {blogData.title}
        </h2>

        {/* Description */}
        <p 
          className="text-xs font-normal md:text-[14px] text-[#1F2937] line-clamp-3 leading-relaxed"
          style={{ fontFamily: "Manrope" }}
        >
          {blogData.description}
        </p>

        {/* Read More Link */}
        <div className="flex justify-end">
          <Link
            href={`/blogs/${blogData.id}`}
            className="inline-flex items-center gap-1 text-sm text-[#0B763C] hover:text-emerald-700 transition-colors cursor-pointer font-medium"
            style={{ fontFamily: "Manrope" }}
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
