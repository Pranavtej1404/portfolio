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
          title="Programming & Web Technologies"
          icon={<FaCode />}
          color="text-blue-600"
          skills={[
            'JavaScript',
            'Java',
            'Python',
            'C++',
            'HTML5',
            'CSS3',
            'JSON',
            'REST APIs',
            'Next.js',
            'React.js',
            'Spring Boot',
          ]}
        />
        <SkillGroup
          title="AI & Machine Learning"
          icon={<FaRobot />}
          color="text-purple-600"
          skills={[
            'Neural Networks (Learning)',
            'scikit-learn',
            'TensorFlow (Basic)',
            'LLMs & GenAI (Exploring)',
          ]}
        />
        <SkillGroup
          title="Tools & Platforms"
          icon={<FaCloud />}
          color="text-green-600"
          skills={[
            'Git',
            'GitHub',
            'VS Code',
            'Postman',
            'Linux (Basic CLI)',
            'Render',
            'Vercel',
          ]}
        />
        <SkillGroup
          title="Soft Skills"
          icon={<FaTools />}
          color="text-yellow-600"
          skills={[
            'Problem Solving',
            'Debugging',
            'Team Collaboration',
            'Communication',
            'Project Ownership',
          ]}
        />
      </div>
    </section>
  )
}
