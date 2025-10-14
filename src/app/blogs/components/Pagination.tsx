"use client"

import { useTransition } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [isPending, startTransition] = useTransition()
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (page: number) => {
    startTransition(() => {
      onPageChange(page)
    })
  }

  // Show only a subset of pages if there are many
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages

    if (currentPage <= 3) {
      return [...pages.slice(0, 5), "...", totalPages]
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", ...pages.slice(totalPages - 5)]
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors ${isPending ? 'opacity-50' : ''}`}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-gray-500">
                ...
              </span>
            )
          }

          const pageNumber = page as number
          const isActive = pageNumber === currentPage

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-[24px] h-[24px] text-sm rounded-full transition-colors ${
                isActive ? "bg-[#0ADD68] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors ${isPending ? 'opacity-50' : ''}`}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
