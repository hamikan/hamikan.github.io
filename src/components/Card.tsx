interface CardProps {
  image: string
  title: string
  startDate: string
  endDate: string
  teamSize: number
  githubUrl: string
}

export function Card({ image, title, startDate, endDate, teamSize, githubUrl }: CardProps) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>期間: {startDate} - {endDate}</p>
          <p>チーム人数: {teamSize}人</p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            GitHubリポジトリ
          </a>
        </div>
      </div>
    </div>
  )
} 