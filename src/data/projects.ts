import atCoderProgressImage from "@/assets/images/projects/AtCoder-Progress.png"
import kindaiContestImage from "@/assets/images/projects/Kindai-Contest.png"
import portfolioImage from "@/assets/images/projects/portfolio.png"
import {
  TAG_DOCKER,
  TAG_DOMJUDGE,
  TAG_GO,
  TAG_NEXT_JS,
  TAG_PHP,
  TAG_POSTGRESQL,
  TAG_PRISMA,
  TAG_REACT,
  TAG_TAILWIND_CSS,
  TAG_TYPESCRIPT,
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
    title: "アルバイト",
    summary: "在学中に招待を受けて参加した、プログラミングのアルバイト。実際の職場体験を通して、より細かな開発プロセスを学びました。",
    startDate: "2025-08-04",
    endDate: "現在",
    teamSize: "アルバイト",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_GO, TAG_PHP, TAG_DOCKER],
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
