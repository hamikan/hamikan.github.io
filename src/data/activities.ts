import {
  TAG_ATCODER,
  TAG_COMMUNITY,
  TAG_CPP,
  TAG_GITHUB,
  TAG_ICPC,
  TAG_TYPESCRIPT,
  TAG_REACT,
  TAG_WEB,
  TAG_GAME,
  TAG_NEXT_JS,
  TAG_COMPETITIVE_PROGRAMMING,
} from "./tags"
import type { FocusArea } from "./types"

export const focusAreas: FocusArea[] = [
  {
    title: "競技プログラミング",
    subtitle: "AtCoder / ICPC",
    metric: "AtCoder 水色",
    summary:
      "1年半でAtCoder水色に到達。大学内で競プロコミュニティを立ち上げ、近畿大学の競プロ文化づくりにも取り組んでいます。",
    details: [
      "AtCoder Problemsで継続的に問題演習を行い、実装力と考察力を伸ばしました。",
      "大学で競技プログラミングのコミュニティを立ち上げ、参加者が学び合える場を作りました。",
      "ICPCに参加する仲間を募り、アジア地区大会進出を目標にチームで練習しています。",
    ],
    links: [
      {
        label: "AtCoder",
        url: "https://atcoder.jp/users/Mikankyan",
      },
      {
        label: "学内コンテスト",
        url: "https://kindaiprogrammingcontest.vercel.app",
      },
    ],
    tags: [TAG_ATCODER, TAG_COMPETITIVE_PROGRAMMING, TAG_ICPC, TAG_COMMUNITY, TAG_CPP],
  },
  {
    title: "チーム開発",
    subtitle: "Project / Internship",
    metric: "ハッカソン / アルバイト",
    summary:
      "2回生からハッカソンに参加。Web開発、Unity、Git/GitHub、チームでの開発プロセスを実践で学びました。",
    details: [
      "短期間で企画、設計、実装、発表まで進める経験を積みました。",
      "Webアプリ開発や、Swift, Unity, Brenderを使ったゲーム開発にも挑戦しました。",
      "企業からオファーを受け、実際の職場体験を通してより細かな開発プロセスを学びました。",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/hamikan",
      },
    ],
    tags: [TAG_TYPESCRIPT, TAG_REACT, TAG_NEXT_JS, TAG_GITHUB, TAG_WEB, TAG_GAME],
  },
  {
    title: "個人開発",
    subtitle: "Learning Product",
    metric: "競プロ学習記録",
    summary:
      "自分1人でどこまで作れるかを知るため、競プロの学習記録サイトを開発中。",
    details: [
      "自分が本当に欲しい機能から出発し、学習記録サービスとして設計しています。",
      "作る中で必要になった知識を調べ、できることから少しずつ実装しています。",
      "大きな構想を分解し、完成まで継続して進める経験を積んでいます。",
    ],
    links: [
      {
        label: "AtCoderProgress（github）",
        url: "https://github.com/hamikan/AtCoderProgress",
      },
    ],
    tags: [TAG_TYPESCRIPT, TAG_REACT, TAG_NEXT_JS, TAG_GITHUB, TAG_WEB],
  },
]
