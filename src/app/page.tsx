import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">DevTools</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white">Pricing</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
          <button className= "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Supercharge Your Development Workflow
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            All-in-one development toolkit that helps you write better code faster. 
            Built by developers, for developers.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="border border-gray-400 text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
              >
                <div className="text-blue-500 text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to boost your productivity?
            </h2>
            <p className="text-blue-100 mb-6">
              Join thousands of developers who are already using DevTools.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 DevTools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: "🚀",
    title: "Rapid Development",
    description: "Build and deploy faster with our streamlined development tools and workflows."
  },
  {
    icon: "🛠️",
    title: "Smart Debugging",
    description: "Advanced debugging tools that help you identify and fix issues quickly."
  },
  {
    icon: "📊",
    title: "Code Analytics",
    description: "Get insights into your code quality and performance metrics in real-time."
  }
]
