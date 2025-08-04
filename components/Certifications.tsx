export default function Certifications() {
  const certs = [
    {
      name: 'Python (Basic)',
      link: 'https://www.hackerrank.com/certificates/6781c8506628'
    },
    {
      name: 'Java (Basic)',
      link: 'https://www.hackerrank.com/certificates/1c49e76d96c2'
    },
    {
      name: 'SQL (Basic)',
      link: 'https://www.hackerrank.com/certificates/a8e4c39466b3'
    }
  ]
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {certs.map((c, i) => (
          <li key={i}>
            <a href={c.link} target="_blank" className="text-blue-500">{c.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
