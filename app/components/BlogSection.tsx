"use client";

import { blogPosts } from "../data/blogPosts";
import { useState } from "react";

const POSTS_PER_PAGE = 3;

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      HackerNoon: "bg-orange-500",
      Medium: "bg-gray-700",
      Hashnode: "bg-blue-500",
    };
    return colors[platform] || "bg-gray-600";
  };

  return (
    <section id="blog" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Blog Posts
        </h2>

        {blogPosts.length === 0 ? (
          <p className="text-gray-400 text-center">No blog posts yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`${getPlatformColor(
                        post.platform
                      )} text-white text-xs px-2 py-1 rounded`}
                    >
                      {post.platform}
                    </span>
                    {post.publishedDate && (
                      <span className="text-gray-500 text-xs">
                        {post.publishedDate}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-gray-400 text-sm">{post.description}</p>
                  )}
                  <div className="mt-4 text-gray-500 text-sm">
                    Read more →
                  </div>
                </a>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
                >
                  Previous
                </button>
                <span className="text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
