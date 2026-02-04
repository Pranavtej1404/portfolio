import { FaCode, FaTools, FaCloud, FaRobot } from 'react-icons/fa'

const SkillGroup = ({
  title,
  icon,
  skills,
  color,
}: {
  title: string
  icon: React.ReactNode
  skills: string[]
  color?: string
}) => (
  <div>
    <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
      <span className={color ? color : ""} aria-hidden="true">{icon}</span>
      <span>{title}</span>
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-400 px-3 py-1 rounded-xl text-sm text-gray-800 border hover:bg-gray-300 transition-colors cursor-pointer"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <SkillGroup
          title="Programming & Core CS"
          icon={<FaCode />}
          color="text-blue-600"
          skills={[
            'Java',
            'Python',
            'JavaScript (ES6+)',
            'TypeScript',
            'DSA',
            'OOP',
            'Design Patterns',
          ]}
        />
        <SkillGroup
          title="Backend & Databases"
          icon={<FaTools />}
          color="text-purple-600"
          skills={[
            'Spring Boot',
            'FastAPI',
            'Node.js',
            'RESTful APIs',
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'Redis',
          ]}
        />
        <SkillGroup
          title="Frontend & UI"
          icon={<FaCode />}
          color="text-green-600"
          skills={[
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
          ]}
        />
        <SkillGroup
          title="Tools & Development"
          icon={<FaCloud />}
          color="text-yellow-600"
          skills={[
            'Git & GitHub',
            'Docker',
            'CI/CD Pipelines',
            'Agile/Scrum',
            'Unit Testing',
            'Windows OS',
            'Postman',
          ]}
        />
      </div>
    </section>
  )
}
