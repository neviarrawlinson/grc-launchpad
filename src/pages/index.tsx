import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">🚀 GRC LaunchPad</h1>
        <p className="text-lg mb-8">
          Welcome to your one-stop platform for launching a career in Governance, Risk, and Compliance. 
          Learn. Practice. Certify. Land the job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <Link
            href="/course/grc-101"
            className="bg-blue-600 text-white px-6 py-4 rounded shadow hover:bg-blue-700 transition"
          >
            📘 Start GRC 101
          </Link>
          <Link
            href="/labs"
            className="bg-green-600 text-white px-6 py-4 rounded shadow hover:bg-green-700 transition"
          >
            🧪 Hands-on Labs
          </Link>
          <Link
            href="/career"
            className="bg-purple-600 text-white px-6 py-4 rounded shadow hover:bg-purple-700 transition"
          >
            💼 Career Resources
          </Link>
          <Link
            href="/about"
            className="bg-gray-800 text-white px-6 py-4 rounded shadow hover:bg-gray-900 transition"
          >
            ℹ️ About the Platform
          </Link>
        </div>
      </section>
    </main>
  )
}
