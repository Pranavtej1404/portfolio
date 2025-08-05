import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      name: 'RefactorGenie',
      desc: 'AST + GenAI-based backend to improve Python code quality.',
      link: 'https://refactorgenie.onrender.com',
      github: 'https://github.com/Pranavtej1404/RefactorGenie',
    },
    {
      name: 'Wedding Planner Web App',
      desc: 'Full-stack service portal with Spring Boot and Next.js.',
      github: 'https://github.com/Pranavtej1404/Wedding-Planner-Web-App',
    },
    {
      name: 'Student Management System',
      desc: 'C++ backend with Crow Framework for RESTful API support.',
      github: 'https://github.com/Pranavtej1404/StudentManagementSystem',
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 py-16" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border-l-2 border-blue-500 pl-4 relative"
          >
            {/* GitHub icon in top right */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 text-gray-600 hover:text-black hover:bg-gray-600 rounded-full transition-colors"
              >
                <FaGithub size={22} />
              </a>
            )}

            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-3">{project.desc}</p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-400 px-3 py-1 rounded-xl text-sm text-gray-800 border hover:bg-gray-300 transition-colors cursor-pointer"
              >
                View Live
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
