import Algo_firstImage from "@/assets/images/others/algorithms/AtCoder-logo.png"
import icpc2025Image from "@/assets/images/others/KDIXLab/ICPC-2025.jpg"
import kyoupuroSetumeikaiImage from "@/assets/images/others/KDIXLab/kyoupuro-setumeikai.jpg"
import Algo_nyuutyaImage from "@/assets/images/others/algorithms/nyuutya.png"
import Algo_nyuuryokuImage from "@/assets/images/others/algorithms/nyuuryoku.png"
import Algo_nyuusuiImage from "@/assets/images/others/algorithms/nyuusui.png"
import kdixLabImage from "@/assets/images/others/KDIXLab/KDIXLab.png"
import Heu_firstImage from "@/assets/images/others/heuristics/First-AHC.png"
import Heu_nyuutyaImage from "@/assets/images/others/heuristics/nyuutya.png"
import EXPO2026Image from "@/assets/images/others/events/EXPO2026.png"
import STECHConnectKANSAI2025Image from "@/assets/images/others/events/STECHConnectKANSAI2025.png"
import geeksaiIconImage from "@/assets/images/others/events/geeksai2024autumn.png"
import {
  TAG_ALGORITHMS,
  TAG_ATCODER,
  TAG_COMMUNITY,
  TAG_COMPETITIVE_PROGRAMMING,
  TAG_CPP,
  TAG_EVENT,
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
    image: kyoupuroSetumeikaiImage,
    title: "競プロ説明会の開催",
    summary: "大学内で競技プログラミングに興味を持つ人を増やすため、概要や楽しさを伝える説明会を企画・開催しました。",
    startDate: "2026-04-04",
    endDate: "2026-04-14",
    teamSize: "2人",
    techs: [TAG_COMMUNITY, TAG_PRESENTATION, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: STECHConnectKANSAI2025Image,
    title: "STECH Connect KANSAI 2025",
    summary: "大阪で開催された、学生エンジニア同士や企業との交流イベントに参加しました。交流会やコードの懺悔会を通して、関西の学生エンジニアとつながる機会になりました。",
    startDate: "2025-06-29",
    endDate: "2025-06-29",
    teamSize: "参加者27人",
    externalUrl: "https://careerselect-studygroup.connpass.com/event/355196/",
    externalLabel: "connpass",
    techs: [TAG_COMMUNITY, TAG_EVENT],
  },
  {
    image: geeksaiIconImage,
    title: "技育祭2025【秋】",
    summary: "学生向けテックカンファレンスに参加し、エンジニアのキャリアや技術トレンドに触れました。気になるセッションを通して、今後の学習や開発の方向性を考える機会になりました。",
    startDate: "2025-10-11",
    endDate: "2025-10-12",
    teamSize: "オンライン参加",
    externalUrl: "https://geek.supporterz.jp/geeksai/2025autumn",
    externalLabel: "公式ページ",
    techs: [TAG_COMMUNITY, TAG_EVENT],
  },
  {
    image: EXPO2026Image,
    title: "エンジニアサマーインターンEXPO",
    summary: "28卒エンジニア向けのオンライン合同説明会に参加しました。サマーインターンに向けて、企業ごとの特徴やエンジニア職の働き方を知る機会になりました。",
    startDate: "2026-05-16",
    endDate: "2026-05-16",
    teamSize: "オンライン参加",
    externalUrl: "https://lp.supporterz.jp/summerexpo/2026/",
    externalLabel: "イベントページ",
    techs: [TAG_COMMUNITY, TAG_EVENT],
  },
  {
    image: Algo_firstImage,
    title: "ABC初参加（灰色）",
    summary: "競技プログラミングに興味を持ち、AtCoderで継続的に問題を解き始めた最初のタイミングです。",
    startDate: "2024-08-03",
    endDate: "2024-12-14",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: Algo_nyuutyaImage,
    title: "入茶",
    summary: "継続的な演習を通して、AtCoderで茶色レートに到達した節目です。基礎的な実装力が安定してきた時期でした。",
    startDate: "2024-12-14",
    endDate: "2025-04-19",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: Algo_nyuuryokuImage,
    title: "入緑",
    summary: "解ける問題の幅が広がり、考察と実装の両方で安定感が出てきた段階として、AtCoder緑レートに到達しました。",
    startDate: "2025-04-19",
    endDate: "2026-01-17",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: Algo_nyuusuiImage,
    title: "入水",
    summary: "より高い難度の問題にも対応できるようになり、AtCoder水色到達まで成長しました。",
    startDate: "2026-01-17",
    endDate: "現在",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_ALGORITHMS, TAG_COMPETITIVE_PROGRAMMING],
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
    image: Heu_firstImage,
    title: "AHC初参加（灰色）",
    summary: "AHCに興味を持ち参加してみました。初参加で青パフォが取れて嬉しかったのを覚えています。",
    startDate: "2026-04-26",
    endDate: "2026-05-17",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_HEURISTICS, TAG_COMPETITIVE_PROGRAMMING],
  },
  {
    image: Heu_nyuutyaImage,
    title: "AHC入茶",
    summary: "AHCで茶色レートに到達しました。ヒューリスティックの考察や改善サイクルにも少しずつ慣れてきた節目です。",
    startDate: "2026-05-17",
    endDate: "現在",
    teamSize: "1人",
    techs: [TAG_ATCODER, TAG_HEURISTICS, TAG_COMPETITIVE_PROGRAMMING],
  },
]
