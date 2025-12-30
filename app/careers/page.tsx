import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the ShopHub team! Explore exciting career opportunities in ecommerce, technology, customer service, and more. Build your future with us.",
  openGraph: {
    title: "Careers | ShopHub",
    description: "Join the ShopHub team and build your future with us",
  },
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain our ecommerce platform using modern web technologies.",
    },
    {
      id: 2,
      title: "Customer Success Specialist",
      department: "Customer Service",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Help our customers have amazing experiences and resolve their concerns.",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead our digital marketing strategy and grow our online presence.",
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Create beautiful, intuitive user experiences for our platform.",
    },
    {
      id: 5,
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      description:
        "Ensure efficient order fulfillment and inventory management.",
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Transform data into insights that drive business decisions.",
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance",
    },
    {
      icon: "🏖️",
      title: "Flexible Time Off",
      description: "Generous PTO policy and flexible work arrangements",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Professional development budget and learning opportunities",
    },
    {
      icon: "🏡",
      title: "Remote Options",
      description: "Work from anywhere with our remote-first culture",
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building activities and company events",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r bg-gray-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">
            Build your career at ShopHub and make a real impact
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16" aria-labelledby="why-work-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="why-work-heading"
              className="text-3xl font-bold mb-6 text-gray-900"
            >
              Why Work at ShopHub?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At ShopHub, we're more than just an ecommerce platform. We're a
              team of passionate individuals working together to revolutionize
              online shopping. We value innovation, collaboration, and personal
              growth, and we're always looking for talented people to join our
              journey.
            </p>
          </div>
        </section>

        <section
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
          aria-labelledby="benefits-heading"
        >
          <h2
            id="benefits-heading"
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-3" aria-hidden="true">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="positions-heading">
          <h2
            id="positions-heading"
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Open Positions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobOpenings.map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/careers`}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    View Details
                  </Link>
                </div>
                <p className="text-gray-700">{job.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
          aria-labelledby="process-heading"
        >
          <h2
            id="process-heading"
            className="text-3xl font-bold mb-8 text-center text-gray-900"
          >
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Apply</h3>
              <p className="text-sm text-gray-600">
                Submit your application and resume
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Screen</h3>
              <p className="text-sm text-gray-600">
                Initial phone or video screening
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Interview</h3>
              <p className="text-sm text-gray-600">Meet with team members</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Offer</h3>
              <p className="text-sm text-gray-600">
                Receive and accept your offer
              </p>
            </div>
          </div>
        </section>

        <section
          className="text-center bg-white rounded-lg shadow-lg p-12"
          aria-labelledby="cta-heading"
        >
          <h2
            id="cta-heading"
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume
            and tell us how you can contribute to ShopHub's success.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  );
}
