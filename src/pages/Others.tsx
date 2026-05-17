import { Card } from "@/components/Card"
import { others } from "@/data/others"

export function Others() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">In Progress</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">Others</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          これから追加していくコンテンツの一覧です。活動の過程や学習ログも見えるポートフォリオに広げていくための、準備中のページをまとめています。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {others.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            video={item.video}
            title={item.title}
            summary={item.summary}
            startDate={item.startDate}
            endDate={item.endDate}
            teamSize={item.teamSize}
            githubUrl={item.githubUrl}
            externalUrl={item.externalUrl}
            externalLabel={item.externalLabel}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  )
}
