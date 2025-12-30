import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ShopHub's mission to provide quality products at affordable prices. Discover our story, values, and commitment to customer satisfaction.",
  openGraph: {
    title: "About Us | ShopHub",
    description: "Learn about ShopHub's mission and values",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopHub</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in online shopping since 2020
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16" aria-labelledby="story-heading">
          <div className="max-w-4xl mx-auto">
            <h2
              id="story-heading"
              className="text-3xl font-bold mb-6 text-gray-900"
            >
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                ShopHub was founded with a simple yet powerful vision: to make
                quality products accessible to everyone at prices that don't
                break the bank. What started as a small operation has grown into
                a thriving online marketplace serving thousands of satisfied
                customers worldwide.
              </p>
              <p>
                Our journey began when our founders noticed a gap in the market
                for a shopping platform that truly prioritizes customer
                satisfaction. They envisioned a place where quality meets
                affordability, where every transaction builds trust, and where
                shopping online feels secure and enjoyable.
              </p>
              <p>
                Today, ShopHub stands as a testament to that vision. We've
                carefully curated our product selection, established
                relationships with reliable suppliers, and built a team
                dedicated to ensuring your shopping experience exceeds
                expectations.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
          aria-labelledby="values-heading"
        >
          <h2
            id="values-heading"
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on product quality. Every item is thoroughly
                vetted to meet our high standards before reaching our customers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Customer Focused
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to support you
                every step of the way, from browsing to delivery and beyond.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Trust & Transparency
              </h3>
              <p className="text-gray-600">
                We believe in honest communication and transparent practices.
                What you see is what you get, with no hidden surprises.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="team-heading">
          <h2
            id="team-heading"
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Our Team
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-12 text-lg">
              Behind ShopHub is a dedicated team of professionals passionate
              about delivering excellence. From our customer service
              representatives to our logistics partners, everyone plays a
              crucial role in making your shopping experience seamless.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-sm text-gray-600">
                  Visionary leader with 15+ years in ecommerce
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Michael Chen
                </h3>
                <p className="text-green-600 mb-3">Head of Operations</p>
                <p className="text-sm text-gray-600">
                  Ensures smooth operations and timely deliveries
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Emily Rodriguez
                </h3>
                <p className="text-purple-600 mb-3">Customer Success Manager</p>
                <p className="text-sm text-gray-600">
                  Dedicated to your satisfaction and support
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12"
          aria-labelledby="stats-heading"
        >
          <h2 id="stats-heading" className="sr-only">
            Company Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
