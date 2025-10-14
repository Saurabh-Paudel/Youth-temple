import { BlogPost } from "../data/blogData"

interface BlogContentProps {
  blog: BlogPost;
}

export function BlogContent({ blog }: BlogContentProps) {
  return (
    <article className="prose prose-lg mb-6 md:mb-16 max-w-none">
      <p className="text-[#1F2937] leading-relaxed text-sm md:text-base">
        {blog.content.introduction}
      </p>

      {blog.content.sections.map((section, index) => (
        <div key={index}>
          <h2 className="my-3 text-lg md:text-[20px] font-bold text-[#030712]">{section.title}</h2>
          <p className="text-[#1F2937] leading-relaxed text-sm md:text-base">
            {section.content}
          </p>
        </div>
      ))}
    </article>
  )
}
