interface WorkItemProps {
  year: string
  company: string
  role: string
}

interface ResearchItemProps {
  title: string
  description?: string
  location?: string
}

export function WorkItem({ year, company, role }: WorkItemProps) {
  return (
    <div className="flex items-center text-gray-300">
      <span className="w-20 text-sm mr-8 text-accent">{year}</span>
      <span className="flex-1">
        {company} // {role}
      </span>
    </div>
  )
}

export function ResearchItem({ title, description, location = "@ RESL" }: ResearchItemProps) {
  return (
    <div className="flex items-center text-gray-300">
      <span className="w-20 text-sm mr-8 text-accent">{location}</span>
      <span className="flex-1">
        {title} // {description && (
          <a href="#" className="text-blue-400 hover:text-blue-300 underline">
            {description}
          </a>
        )}
      </span>
    </div>
  )
}
