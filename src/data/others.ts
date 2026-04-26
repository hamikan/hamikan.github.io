import atCoderIconImage from "@/assets/images/others/AtCoder-logo.png"
import icpc2025Image from "@/assets/images/others/ICPC-2025.jpg"
import kyoupuroSetumeikaiImage from "@/assets/images/others/kyoupuro-setumeikai.jpg"
import nyuutyaImage from "@/assets/images/others/nyuutya.png"
import nyuuryokuImage from "@/assets/images/others/nyuuryoku.png"
import nyuusuiImage from "@/assets/images/others/nyuusui.png"
import kdixLabImage from "@/assets/images/others/KDIXLab.png"
import firstAHCImage from "@/assets/images/others/First-AHC.png"
import {
  TAG_ALGORITHMS,
  TAG_ATCODER,
  TAG_COMMUNITY,
  TAG_COMPETITIVE_PROGRAMMING,
  TAG_CPP,
  TAG_ICPC_2025,
  TAG_JAVA,
  TAG_PRESENTATION,
  TAG_PYTHON,
  TAG_HEURISTICS,
} from "./tags"
import type { PortfolioItem } from "./types"

export const others: PortfolioItem[] = [
  {
    image: kdixLabImage,
    title: "競プロやろうよ (KDIX Lab)",
    summary: "競技プログラミングの学習や感想戦を行なっているラボ活動。学内コンテストも開催し、参加者が競プロに触れる場を作っています。",
    startDate: "2025-06-09",
    endDate: "現在進行中",
    teamSize: "約30人",
    githubUrl: "https://github.com/hamikan/Kindai_contest",
    techs: [TAG_CPP, TAG_PYTHON, TAG_JAVA, TAG_COMMUNITY, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: atCoderIconImage,
    title: "ABC初参加（灰色）",
    summary: "競技プログラミングに興味を持ち、AtCoderで継続的に問題を解き始めた最初のタイミングです。",
    startDate: "2024-08-03",
    endDate: "2024-12-14",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: nyuutyaImage,
    title: "入茶",
    summary: "継続的な演習を通して、AtCoderで茶色レートに到達した節目です。基礎的な実装力が安定してきた時期でした。",
    startDate: "2024-12-14",
    endDate: "2025-04-19",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: nyuuryokuImage,
    title: "入緑",
    summary: "解ける問題の幅が広がり、考察と実装の両方で安定感が出てきた段階として、AtCoder緑レートに到達しました。",
    startDate: "2025-04-19",
    endDate: "2026-01-17",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: nyuusuiImage,
    title: "入水",
    summary: "より高い難度の問題にも対応できるようになり、AtCoder水色到達まで成長しました。",
    startDate: "2026-01-17",
    endDate: "現在",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: kyoupuroSetumeikaiImage,
    title: "競プロ説明会の開催",
    summary: "大学内で競技プログラミングに興味を持つ人を増やすため、概要や楽しさを伝える説明会を企画・開催しました。",
    startDate: "2026-04-04",
    endDate: "2026-04-14",
    teamSize: "2人",
    techs: [TAG_COMMUNITY, TAG_PRESENTATION, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: icpc2025Image,
    title: "ICPC2025国内予選",
    summary:
      "200位というかなり悔しい結果になりました。次回のICPCではこの経験を活かして、より良い結果で挽回できるように頑張りたいです。",
    startDate: "2025-06-18",
    endDate: "2025-07-04",
    teamSize: "3人 + コーチ1人",
    techs: [TAG_ICPC_2025, TAG_COMPETITIVE_PROGRAMMING, TAG_COMMUNITY],
  },
  {
    image: firstAHCImage,
    title: "AHC初参加（灰色）",
    summary: "AHCに興味を持ち参加してみました。初参加で青パフォが取れて嬉しかったのを覚えています。",
    startDate: "2026-04-26",
    endDate: "現在",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_HEURISTICS, TAG_COMPETITIVE_PROGRAMMING],
  },
]
