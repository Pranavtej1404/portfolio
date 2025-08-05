export default function Certifications() {
  const certifications = [
    {
      name: 'Python (Basic)',
      link: 'https://www.hackerrank.com/certificates/6781c8506628',
    },
    {
      name: 'Java (Basic)',
      link: 'https://www.hackerrank.com/certificates/1c49e76d96c2',
    },
    {
      name: 'SQL (Basic)',
      link: 'https://www.hackerrank.com/certificates/a8e4c39466b3',
    },
  ]

  return (
    <section className="bg-gray-900 text-white px-4 py-16" id="certifications">
      <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">{cert.name}</h3>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm font-medium text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
