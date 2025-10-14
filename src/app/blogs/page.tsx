"use client";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import BlogSection from "./components/BlogSection";
import RightBlog from "./components/RightBlog";
import { BlogGrid } from "./components/BlogGrid";
import CTASection from "@/components/CTASection";
// import { useParams } from "next/navigation";
export default function BlogsPage() {
  // const {blogId}=useParams();
  return (
    <main className="w-full max-w-[1320px] mx-auto">
      {/* header */}
      <div className="py-4 md:py-10 lg:py-16 flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#F97316]" />
          <h3 
            className="text-sm sm:text-base font-normal text-[#1F2937]"
            style={{ fontFamily: "Manrope" }}
          >
            Blogs
          </h3>
        </div>
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-[#030712] font-medium leading-tight"
          style={{ fontFamily: "Sora" }}
        >
          Stories That Inspire Hope and Change
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2">
          <p 
            className="text-sm sm:text-base font-normal text-[#1F2937] leading-relaxed max-w-2xl"
            style={{ fontFamily: "Manrope" }}
          >
            Explore impactful stories, insights, and updates that bring you closer to the lives we&apos;re transforming together.
          </p>
          <Button 
            variant="outline" 
            className="text-[#1F2937] px-4 py-3 rounded-full mb-2 font-normal hover:bg-[#0B763C] hover:text-white transition-colors"
            style={{ fontFamily: "Manrope" }}
          >
            Subscribe our Stories
          </Button>
        </div>
      </div>
      {/* Blogs */}
      <div className="flex lg:flex-row flex-col gap-6">
        <BlogSection />
        <RightBlog />
      </div>
      <div className="my-1 md:my-2 lg:my-5">
        <Suspense fallback={<div className="flex justify-center items-center py-12">Loading...</div>}>
          <BlogGrid />
        </Suspense>
      </div>
      <div className="mt-2 md:mt-5 lg:mt-16 mb-5">
        <CTASection />
      </div>
    </main>
  );
}
