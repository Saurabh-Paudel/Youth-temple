import { BlogHeader } from "./BlogHeader"
import { BlogContent } from "./BlogContent"
import { ExploreBlogSection } from "./ExploreSection"
import { BlogPost } from "../data/blogData"

interface BlogArticleProps {
  blog: BlogPost;
}

export function BlogArticle({ blog }: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-8">
        <BlogHeader blog={blog} />
        <BlogContent blog={blog} />
        <ExploreBlogSection currentBlogId={blog.id} />
      </div>
    </div>
  )
}
