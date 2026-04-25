import akiyaGameImage from "@/assets/images/hackathons/akiya-game.jpg"
import giikuCampImage from "@/assets/images/hackathons/giiku-camp.png"
import kindaiCampusNaviImage from "@/assets/images/hackathons/kindai-campus-navi.png"
import toryumonHackImage from "@/assets/images/hackathons/toryumon-hack-2025.png"
import {
  TAG_AR_KIT,
  TAG_BLENDER,
  TAG_GENERATIVE_AI,
  TAG_GITHUB,
  TAG_HACKATHON,
  TAG_IDEATHON,
  TAG_NEXT_JS,
  TAG_OPENAI,
  TAG_REACT,
  TAG_SWIFT,
  TAG_TAILWIND_CSS,
  TAG_TYPESCRIPT,
  TAG_UNITY,
} from "./tags"
import type { PortfolioItem } from "./types"

export const hackathons: PortfolioItem[] = [
  {
    image: akiyaGameImage,
    title: "WakeUp! ハッカソン",
    summary: "眠る空き家を起こすことをテーマに、ARとゲーム表現を組み合わせた体験をチームで制作しました。",
    startDate: "2025-04-26",
    endDate: "2025-04-29",
    teamSize: "4人",
    githubUrl: "https://github.com/wakeup-B/destroy-akiya",
    techs: [TAG_SWIFT, TAG_UNITY, TAG_BLENDER, TAG_AR_KIT, TAG_HACKATHON],
  },
  {
    image: toryumonHackImage,
    title: "登竜門Hack 2025",
    summary: "チームメンバーと役割を分担しながら、メンターさんの助言をもとにプロダクトを完成させ大阪会場賞を受賞しました。",
    startDate: "2025-05-31",
    endDate: "2025-06-15",
    teamSize: "5人 + メンター1人",
    githubUrl: "https://github.com/orgs/toryumon-pj/teams/hack-kansai-2025-teamf",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_NEXT_JS, TAG_TAILWIND_CSS, TAG_GITHUB, TAG_HACKATHON],
  },
  {
    image: kindaiCampusNaviImage,
    title: "Kindai GPT Hackathon",
    summary: "OpenAIの職員さんも監修し、1日開催のアイデアソンに近い形式のハッカソン。短時間で課題を整理し、生成AIをどう活用できるかを考える経験を得ました。",
    startDate: "2025-12-05",
    endDate: "2025-12-05",
    teamSize: "4人",
    techs: [TAG_OPENAI, TAG_GENERATIVE_AI, TAG_IDEATHON],
  },
  {
    image: giikuCampImage,
    title: "【技育CAMP2025】ハッカソン Vol.14",
    summary: "ほぼ開発経験なしのチームで役割分担しながら、短期間でプロダクトの実装と発表まで進めました。同時に、今の自分の未熟さも痛感するとともに、今後の成長の方向性も見えた経験でした。",
    startDate: "2025-10-31",
    endDate: "2025-11-09",
    teamSize: "3人",
    githubUrl: "https://github.com/hamikan/giiku-camp-team18",
    techs: [TAG_TYPESCRIPT, TAG_REACT, TAG_NEXT_JS, TAG_TAILWIND_CSS, TAG_GITHUB, TAG_HACKATHON],
  },
]
