export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            私の名前、年齢、所属大学、経歴などについて詳しく紹介しています。
            私がどのような人間で、どのような経験を持っているのかを知ることができます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Hackathon</h2>
          <p className="text-lg">
            これまでに参加したハッカソンの成果物を紹介しています。
            各ハッカソンでの経験や学び、作成したプロジェクトの詳細を確認できます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="text-lg">
            個人で取り組んだプロジェクトや、現在進行中のプロジェクトを紹介しています。
            技術スタックや実装の詳細、成果物のデモなどを見ることができます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Others</h2>
          <p className="text-lg">
            その他の活動や興味のある分野について紹介しています。
            技術ブログや趣味の活動など、様々な側面を知ることができます。
          </p>
        </section>
      </div>
    </div>
  )
} 