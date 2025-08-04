export default function Projects() {
  const projects = [
    {
      name: 'RefactorGenie',
      desc: 'AST + GenAI-based backend to improve Python code quality.',
      link: 'https://refactorgenie.onrender.com'
    },
    {
      name: 'Wedding Planner Web App',
      desc: 'Full-stack service portal with Spring Boot and Next.js.',
    },
    {
      name: 'Student Management System',
      desc: 'C++ backend with Crow Framework for RESTful API support.'
    }
  ]
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((p, i) => (
          <li key={i}>
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p>{p.desc}</p>
            {p.link && <a href={p.link} target="_blank" className="text-blue-600">View Live</a>}
          </li>
        ))}
      </ul>
    </section>
  )
}
