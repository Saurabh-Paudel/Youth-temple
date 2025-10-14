"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { BlogCard } from "../[blogId]/components/BlogCard"
import { Pagination } from "./Pagination"


interface BlogPost {
  id: number
  title: string
  description: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Vocational education empowers young people",
    description:
      "Vocational training is helping children learn new skills and design. As a result, they are able to earn a living and support their families.",
    image: "/assets/blog3.png",
  },
  {
    id: 2,
    title: "Empowering youth through knowledge",
    description:
      "For a generation to succeed and grow, they must have the right tools and knowledge. Education is the key to unlocking their potential.",
    image: "/assets/blog2.png",
  },
  {
    id: 3,
    title: "Inspiring the Next Generation with Education",
    description:
      "Education is the foundation of success. It provides the tools and knowledge needed to build a better future for all.",
    image: "/assets/blog1.png",
  },
  {
    id: 4,
    title: "Culinary arts nurture creativity and passion",
    description:
      "Culinary training provides youth the skills to create delicious dishes while fostering creativity and passion for the culinary arts.",
    image: "/assets/blog4.png",
  },
  {
    id: 5,
    title: "Fostering Innovation through Technology Education",
    description:
      "Technology education is essential for preparing students for the future. It provides them with the skills they need to succeed.",
    image: "/assets/blog4.png",
  },
  {
    id: 6,
    title: "Youth Strength in Struggles: Who Refused to Give Up",
    description:
      "Our students have overcome many challenges and obstacles. Their determination and resilience have helped them succeed.",
    image: "/assets/blog4.png",
  },
  {
    id: 7,
    title: "Environmental science cultivates awareness and responsibility",
    description:
      "By teaching young people about the environment, we can help them understand the importance of sustainability and conservation.",
    image: "/assets/blog4.png",
  },
  {
    id: 8,
    title: "Building a Sustainable Future through Green Initiatives",
    description:
      "Our programs empower youth to take action on environmental issues and create a more sustainable future for all.",
    image: "/assets/blog4.png",
  },
  {
    id: 9,
    title: "Transforming Lives: One Story of Hope and Possibility at a Time",
    description:
      "Every student has a unique story of hope and possibility. We are committed to helping them achieve their dreams.",
    image: "/assets/blog4.png",
  },
  {
    id: 10,
    title: "Sports and Recreation Build Character",
    description: "Physical education and sports help students develop teamwork, discipline, and leadership skills.",
    image: "/assets/blog4.png",
  },
  {
    id: 11,
    title: "Arts Education Unlocks Creative Potential",
    description: "Through arts education, students discover their creative talents and learn to express themselves.",
    image: "/assets/blog4.png",
  },
  {
    id: 12,
    title: "STEM Programs Prepare Future Innovators",
    description: "Science, technology, engineering, and math programs equip students with critical thinking skills.",
    image: "/assets/blog4.png",
  },
  {
    id: 13,
    title: "Community Service Builds Compassion",
    description: "Students learn the value of giving back through community service projects and volunteer work.",
    image: "/assets/blog4.png",
  },
  {
    id: 14,
    title: "Language Learning Opens New Doors",
    description:
      "Learning new languages helps students connect with different cultures and expand their opportunities.",
    image: "/assets/blog4.png",
  },
  {
    id: 15,
    title: "Mentorship Programs Guide Success",
    description:
      "Experienced mentors provide guidance and support to help students navigate their educational journey.",
    image: "/assets/blog4.png",
  },
]

const POSTS_PER_PAGE = 9

export function BlogGrid() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get current page from URL, default to 1
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page') // Remove page param for page 1 to keep URL clean
    } else {
      params.set('page', page.toString())
    }
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/blogs'
    router.push(newUrl, { scroll: false }) // scroll: false prevents scrolling to top
  }

  return (
    <div className="px-2 md:px-0">
      <h1 
        className="text-xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8"
        style={{ fontFamily: "Sora" }}
      >
        More Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
