import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    {
      slug: 'grc-101',
      title: 'GRC 101: Foundations',
      description: 'Learn the basics of Governance, Risk, and Compliance — ideal for career changers.',
    },
    {
      slug: 'risk-register',
      title: 'Risk Register Lab',
      description: 'Practice building and scoring risks using a hands-on risk register simulation.',
    },
    {
      slug: 'rca-lab',
      title: 'Root Cause Analysis Workshop',
      description: 'Learn to complete RCAs with 5 Whys, Fishbone, and practical examples.',
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">Explore Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.slug} href={`/course/${course.slug}`}>
              <div className="cursor-pointer border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
