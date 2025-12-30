import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

const blogPosts: Record<string, any> = {
  "top-10-shopping-tips-2025": {
    title: "Top 10 Online Shopping Tips for 2025",
    author: "Sarah Johnson",
    date: "January 5, 2025",
    readTime: "5 min read",
    category: "Shopping Tips",
    content: `
      <h2>Make Smarter Shopping Decisions This Year</h2>
      <p>As we step into 2025, online shopping continues to evolve with new technologies and trends. Whether you're a seasoned online shopper or just getting started, these tips will help you save money, time, and avoid common pitfalls.</p>
      
      <h3>1. Compare Prices Across Multiple Platforms</h3>
      <p>Never settle for the first price you see. Use price comparison tools and browser extensions to ensure you're getting the best deal. Many retailers price-match, so don't hesitate to ask.</p>
      
      <h3>2. Sign Up for Price Drop Alerts</h3>
      <p>Most major retailers offer price tracking services. Set alerts for products you want, and you'll be notified when prices drop. This is especially useful for electronics and seasonal items.</p>
      
      <h3>3. Leverage Cashback and Reward Programs</h3>
      <p>Cashback websites and credit card rewards can add up to significant savings over time. Always check if your preferred cashback service is available before making a purchase.</p>
      
      <h3>4. Read Reviews Carefully</h3>
      <p>Don't just look at the star rating. Read actual reviews to understand product quality, sizing, and potential issues. Look for verified purchase badges and detailed reviews with photos.</p>
      
      <h3>5. Check Return Policies Before Buying</h3>
      <p>Understanding a retailer's return policy can save you headaches later. Look for free returns, extended return windows, and clear refund procedures.</p>
      
      <h3>6. Use Shopping Apps for Exclusive Deals</h3>
      <p>Many retailers offer app-exclusive discounts and early access to sales. Download apps from your favorite stores to catch special promotions.</p>
      
      <h3>7. Subscribe to Newsletters Strategically</h3>
      <p>Sign up for newsletters from stores you shop at regularly, but use a dedicated email address to avoid cluttering your inbox. First-time subscriber discounts are common.</p>
      
      <h3>8. Time Your Purchases Wisely</h3>
      <p>Certain products have predictable price cycles. Electronics often drop in price after new models launch, while fashion items go on sale at the end of seasons.</p>
      
      <h3>9. Protect Your Personal Information</h3>
      <p>Always shop on secure websites (look for HTTPS), use strong passwords, and consider using virtual credit cards for added security.</p>
      
      <h3>10. Don't Rush - Sleep on Big Purchases</h3>
      <p>Give yourself time to think about major purchases. Many retailers keep items in your cart, and you'll often receive discount codes if you wait a day or two.</p>
      
      <h2>Final Thoughts</h2>
      <p>Smart online shopping is about being informed and patient. By following these tips, you'll not only save money but also have a more satisfying shopping experience. Happy shopping in 2025!</p>
    `,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    openGraph: {
      title: `${post.title} | ShopHub Blog`,
      description: post.content.substring(0, 160),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-8"></div>

        <div
          className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <section
          className="mt-12 pt-8 border-t border-gray-200"
          aria-label="Share this article"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            Share this article
          </h2>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Twitter
            </button>
            <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              Facebook
            </button>
            <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
              LinkedIn
            </button>
          </div>
        </section>

        <section
          className="mt-12 pt-8 border-t border-gray-200"
          aria-labelledby="related-posts"
        >
          <h2
            id="related-posts"
            className="text-2xl font-bold mb-6 text-gray-900"
          >
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/sustainable-shopping-guide"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-3">
                Sustainability
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
                The Ultimate Guide to Sustainable Shopping
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how to make eco-friendly choices...
              </p>
            </Link>
            <Link
              href="/blog/secure-online-shopping"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium mb-3">
                Security
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
                How to Shop Safely Online
              </h3>
              <p className="text-gray-600 text-sm">
                Protect yourself from fraud and scams...
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
