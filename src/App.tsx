import profileImage from './assets/profile.jpg'
import { Card, ProjectCard } from './components/Card'
import { Section } from './components/Section'
import { WorkItem, ResearchItem } from './components/ListItem'

interface WorkExperience {
  year: string
  company: string
  role: string
}

interface Project {
  title: string
  description?: string
}

function App() {
  const workExperience: WorkExperience[] = [
    {
      year: "2024-now",
      company: "Notey Inc.",
      role: "Founder, CTO"
    },
    {
      year: "2021-24",
      company: "Bloomberg",
      role: "Software Engineer"
    },
    {
      year: "2020",
      company: "Bloomberg",
      role: "Software Engineering Intern"
    },
    {
      year: "2020-21",
      company: "USC RESL",
      role: "Robotics Researcher"
    },
    {
      year: "2019",
      company: "Beyond Limits",
      role: "Computer Vision Intern"
    },
    {
      year: "2018-19",
      company: "USC CAIS",
      role: "Research Assistant"
    },
    {
      year: "2018",
      company: "Amazon",
      role: "SDE Intern"
    },
    {
      year: "2017",
      company: "Aruba Networks",
      role: "Intern"
    }
  ]

  const research: Project[] = [
    {
      title: "Meta-World Benchmark",
      description: "link"
    }
  ]

  const projects: Project[] = [
    { title: "Project 1" },
    { title: "Project 2" },
    { title: "Project 3" },
    { title: "Project 4" },
    { title: "Project 5" }
  ]

  return (
    <div className="min-h-screen text-white font-mono text-body p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <p className="text-xs text-gray-400 mb-4">adithya bellathur's personal website</p>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-normal mb-4">Hello</h1>
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                My name is Adithya Bellathur, a developer, founder,{' '}
                <br />
                musician, and artist. I love solving puzzles and tackling hard challenges.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 max-w-2xl">
                I'm currently building the future of music education at{' '}
                <a 
                  href="https://notey.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Notey Inc.
                </a>
              </p>
            </div>
            <div className="ml-8 flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-red-500">
                <img 
                  src={profileImage} 
                  alt="Adithya Bellathur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Work Section */}
      <Section title="work">
        <div className="space-y-4">
          {workExperience.map((work, index) => (
            <WorkItem
              key={index}
              year={work.year}
              company={work.company}
              role={work.role}
            />
          ))}
        </div>
      </Section>

      {/* Research Section */}
      <Section title="research papers">
        <div className="space-y-4">
          {research.map((item, index) => (
            <ResearchItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Personal Projects Section */}
      {/* <Section title="personal projects">
        <div className="grid grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
            />
          ))}
        </div>
      </Section> */}
    </div>
  )
}

export default App
