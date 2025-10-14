"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { BlogCard } from "./BlogCard"
import { getAllBlogPosts } from "../data/blogData"

interface ExploreBlogSectionProps {
  currentBlogId?: string;
}

export function ExploreBlogSection({ currentBlogId }: ExploreBlogSectionProps) {
  const [showAll, setShowAll] = useState(false)
  
  // Get all blogs and filter out the current blog if provided
  const allBlogs = getAllBlogPosts()
  const filteredBlogs = currentBlogId 
    ? allBlogs.filter(blog => blog.id !== currentBlogId)
    : allBlogs
  
  const displayedPosts = showAll ? filteredBlogs : filteredBlogs.slice(0, 3)
  const hasMoreBlogs = filteredBlogs.length > 3

  return (
    <section className="">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-lg md:text-[24px] lg:text-[32px] font-medium text-[#030712]">
          Explore More Blog
        </h2>
        {hasMoreBlogs && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-xs md:text-sm font-medium text-[#0B763C] hover:text-[#0B763C]/80 transition-colors"
          >
            {showAll ? "View Less" : "View More"}
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => (
          <BlogCard 
            key={post.id} 
            title={post.title}
            description={post.description}
            image={post.image}
            category={post.category}
            id={parseInt(post.id)}
          />
        ))}
      </div>
    </section>
  )
}
