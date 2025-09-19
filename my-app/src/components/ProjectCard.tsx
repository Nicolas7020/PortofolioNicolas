interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  icon,
  liveUrl,
  githubUrl,
  gradient
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className={`h-48 ${gradient} flex items-center justify-center`}>
        <div className="text-white text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}