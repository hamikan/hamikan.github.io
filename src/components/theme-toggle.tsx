// import { Moon, Sun } from "lucide-react"
// import { useEffect, useState } from "react"

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     // システムの設定を確認
//     const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
//     setIsDark(isDarkMode)
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark')
//     }
//   }, [])

//   const toggleTheme = () => {
//     setIsDark(!isDark)
//     document.documentElement.classList.toggle('dark')
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//       aria-label="テーマ切り替え"
//     >
//       {isDark ? (
//         <Sun className="w-5 h-5" />
//       ) : (
//         <Moon className="w-5 h-5" />
//       )}
//     </button>
//   )
// } 