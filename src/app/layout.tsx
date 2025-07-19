import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '全日本バナナ早食い競争 | 公式サイト',
  description: 'バナナの果物の地位を上げる！メロンやマンゴーなんかに負けない！全日本バナナ早食い競争の公式サイトです。',
  keywords: 'バナナ,早食い,競争,全日本,イベント,経営者',
  openGraph: {
    title: '全日本バナナ早食い競争',
    description: 'バナナの果物の地位を上げる！メロンやマンゴーなんかに負けない！',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '全日本バナナ早食い競争',
    description: 'バナナの果物の地位を上げる！メロンやマンゴーなんかに負けない！',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}