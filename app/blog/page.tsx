import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, shopping tips, product reviews, and industry insights from the ShopHub team. Stay informed about ecommerce trends.",
  openGraph: {
    title: "Blog | ShopHub",
    description: "Latest articles and insights from ShopHub",
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "top-10-shopping-tips-2025",
    title: "Top 10 Online Shopping Tips for 2025",
    excerpt:
      "Discover the best strategies to save money and shop smarter online in the new year.",
    category: "Shopping Tips",
    author: "Sarah Johnson",
    date: "January 5, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    slug: "sustainable-shopping-guide",
    title: "The Ultimate Guide to Sustainable Shopping",
    excerpt:
      "Learn how to make eco-friendly choices while shopping online and reduce your environmental impact.",
    category: "Sustainability",
    author: "Emily Rodriguez",
    date: "December 28, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "electronics-buying-guide",
    title: "Electronics Buying Guide: What to Look For",
    excerpt:
      "Expert advice on purchasing electronics online, from smartphones to laptops and everything in between.",
    category: "Electronics",
    author: "Michael Chen",
    date: "December 20, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    slug: "fashion-trends-2025",
    title: "Fashion Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with our comprehensive guide to the hottest fashion trends this year.",
    category: "Fashion",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    slug: "secure-online-shopping",
    title: "How to Shop Safely Online: Security Best Practices",
    excerpt:
      "Protect yourself from fraud and scams with these essential online shopping security tips.",
    category: "Security",
    author: "Michael Chen",
    date: "December 10, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    slug: "gift-ideas-every-budget",
    title: "Perfect Gift Ideas for Every Budget",
    excerpt:
      "Find the perfect gift without breaking the bank with our curated selection of ideas.",
    category: "Gift Guide",
    author: "Emily Rodriguez",
    date: "December 5, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=400&fit=crop",
  },
];

const categories = [
  "All",
  "Shopping Tips",
  "Sustainability",
  "Electronics",
  "Fashion",
  "Security",
  "Gift Guide",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ShopHub Blog</h1>
          <p className="text-xl text-blue-100">
            Tips, trends, and insights to help you shop smarter
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">

        <section className="mb-12" aria-labelledby="featured-post">
          <h2
            id="featured-post"
            className="text-2xl font-bold mb-6 text-gray-900"
          >
            Featured Article
          </h2>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-200"></div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  {blogPosts[0].category}
                </span>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {blogPosts[0].title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={blogPosts[0].date}>{blogPosts[0].date}</time>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section aria-labelledby="recent-posts">
          <h2
            id="recent-posts"
            className="text-2xl font-bold mb-6 text-gray-900"
          >
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center"
          aria-labelledby="newsletter-heading"
        >
          <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles delivered
            straight to your inbox.
          </p>
        </section>
      </main>
    </div>
  );
}
