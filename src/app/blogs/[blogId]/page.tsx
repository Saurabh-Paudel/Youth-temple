import { BlogArticle } from "./components/BlogArticle";
import { getBlogPost } from "./data/blogData";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: {
    blogId: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = getBlogPost(params.blogId);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <BlogArticle blog={blog} />
    </main>
  );
}