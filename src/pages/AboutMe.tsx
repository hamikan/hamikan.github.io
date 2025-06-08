export function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="max-w-2xl">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">基本情報</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">名前</h3>
              <p>堀 敦大</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">年齢</h3>
              <p>21歳</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">所属</h3>
              <p>〇〇大学 情報工学部</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">在学期間</h3>
              <p>2022年4月 - 2026年3月（予定）</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
          <p className="text-lg leading-relaxed">
            私はソフトウェア開発に情熱を持つ学生です。
            特にWeb開発とAIに興味があり、日々新しい技術の習得に励んでいます。
            ハッカソンやプロジェクトを通じて、実践的なスキルを磨いています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">スキル</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">プログラミング言語</h3>
              <ul className="list-disc list-inside">
                <li>TypeScript/JavaScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">フレームワーク</h3>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 