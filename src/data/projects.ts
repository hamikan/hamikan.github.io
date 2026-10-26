import atCoderProgressImage from "@/assets/images/projects/AtCoder-Progress.png"
import twoDPlatformerVideo from "@/assets/images/projects/2DPlatformer.mp4"
import kindaiContestImage from "@/assets/images/projects/Kindai-Contest.png"
import portfolioImage from "@/assets/images/projects/portfolio.png"
import lineYahooPresentationVideo from "@/assets/images/projects/intern/LINE_Yahoo_Presentation_Atsuhiro_Hori.mp4"
import rakutenInternshipImage from "@/assets/images/projects/intern/Rakuten_Summer_Internship_2026.png"
import partTimeWorkImage from "@/assets/images/projects/intern/arch.png"
import {
  TAG_DOCKER,
  TAG_DOMJUDGE,
  TAG_FLASK,
  TAG_GAME,
  TAG_UNITY,
  TAG_GO,
  TAG_NEXT_JS,
  TAG_PHP,
  TAG_POSTGRESQL,
  TAG_PRISMA,
  TAG_PYTHON,
  TAG_REACT,
  TAG_TAILWIND_CSS,
  TAG_TYPESCRIPT,
  TAG_VITE,
} from "./tags"
import type { PortfolioItem } from "./types"

export const projects: PortfolioItem[] = [
  {
    image: portfolioImage,
    title: "ポートフォリオ",
    summary: "活動実績と制作物をまとめるためのポートフォリオ",
    startDate: "2026-04-22",
    endDate: "都度更新",
    teamSize: "1人",
    githubUrl: "https://github.com/hamikan/hamikan.github.io",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_TAILWIND_CSS],
  },
  {
    image: atCoderProgressImage,
    title: "競プロ学習記録サイト",
    summary: "AtCoderの学習記録を残すための個人開発。欲しい機能を洗い出しながら、設計と実装を少しずつ進めています。",
    startDate: "2025-06-07",
    endDate: "開発中",
    teamSize: "1人",
    githubUrl: "https://github.com/hamikan/AtCoderProgress",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_NEXT_JS, TAG_TAILWIND_CSS, TAG_DOCKER, TAG_PRISMA, TAG_POSTGRESQL],
  },
  {
    image: partTimeWorkImage,
    title: "アルバイト",
    summary: "在学中に招待を受けて参加した、プログラミングのアルバイト。実際の職場体験を通して、より細かな開発プロセスを学びました。",
    startDate: "2025-08-04",
    endDate: "現在",
    teamSize: "アルバイト",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_GO, TAG_PHP, TAG_DOCKER],
  },
  {
    video: lineYahooPresentationVideo,
    title: "LINEヤフー インターンシップ",
    summary: "色々な方の助けを借りながら、実際のデプロイまでに考慮すべき点や、現場で使われるフロントエンド・バックエンドの技術について学びました。",
    startDate: "2026-08-03",
    endDate: "2026-09-11",
    techs: [TAG_TYPESCRIPT, TAG_REACT],
    details: [
      {
        title: "コース",
        items: ["Yahoo! JAPANトップページの機能改善"],
      },
      {
        title: "取り組んだこと",
        items: [
          "前半4週間は、AIを使わずにデプロイを伴わない課題に取り組みました。",
          "後半2週間は、実務のバグ修正などを担当しました。",
        ],
      },
    ],
  },
  {
    image: rakutenInternshipImage,
    title: "楽天 インターンシップ",
    summary: "与えられた課題を解決するためのアイデアを考え、開発と英語での発表に取り組みました。",
    startDate: "2026-09-14",
    endDate: "2026-09-18",
    techs: [TAG_VITE, TAG_TYPESCRIPT, TAG_FLASK, TAG_PYTHON],
    details: [
      {
        title: "コース",
        items: ["Software Engineer — New Development Course"],
      },
      {
        title: "取り組んだこと",
        items: [
          "Vite・TypeScriptを用いたフロントエンドと、Flask（Python）を用いたバックエンドを担当しました。",
          "課題解決のアイデアを考え、英語で発表しました。",
        ],
      },
    ],
  },
  {
    video: twoDPlatformerVideo,
    title: "2D Platformer",
    summary: "一回生の頃にYouTubeとドキュメントを参考にしながら、独学で作成しました。プログラミングって楽しいと気づいたきっかけの作品です。",
    startDate: "2024-07-04",
    endDate: "2024-07-18",
    teamSize: "2人",
    techs: [TAG_GAME, TAG_UNITY],
  },
  {
    image: kindaiContestImage,
    title: "情報学部プログラミングコンテスト2025",
    summary: "情報学部内で競技プログラミングコンテストを開催するために、ルール設計、問題作成、告知用サイト、DOMjudgeベースのコンテスト環境づくりを進めたプロジェクトです。",
    startDate: "2025-11-28",
    endDate: "2026-01-27",
    teamSize: "2人",
    githubUrl: "https://github.com/hamikan/Kindai_contest",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_DOCKER, TAG_DOMJUDGE],
  },
]
