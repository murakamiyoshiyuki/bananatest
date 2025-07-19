'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    date: '2024.02.15',
    category: 'お知らせ',
    title: '第5回全日本バナナ早食い競争の開催日程が決定しました',
    excerpt: '2024年5月1日（水）に東京ビッグサイトにて開催することが決定いたしました。エントリー受付は3月1日より開始します。',
    tags: ['大会情報', '重要'],
  },
  {
    id: 2,
    date: '2024.02.10',
    category: 'メディア',
    title: 'テレビ東京「ビジネスリーダー」で特集されました',
    excerpt: '前回大会の様子と参加経営者へのインタビューが放送されました。見逃し配信も公開中です。',
    tags: ['メディア露出', 'TV'],
  },
  {
    id: 3,
    date: '2024.02.05',
    category: 'イベント',
    title: 'バナナビジネスセミナー開催のお知らせ',
    excerpt: 'バナナの新しいビジネスチャンスについて学ぶセミナーを3月15日に開催します。参加費無料、先着50名様限定。',
    tags: ['セミナー', '無料'],
  },
  {
    id: 4,
    date: '2024.01.30',
    category: 'レポート',
    title: '2023年度大会レポートを公開しました',
    excerpt: '昨年の大会の詳細レポートをPDFでダウンロードいただけます。参加者の声や大会の統計データも掲載。',
    tags: ['レポート', 'データ'],
  },
]

const categoryColors: { [key: string]: string } = {
  'お知らせ': 'bg-primary-100 text-primary-700',
  'メディア': 'bg-banana-100 text-banana-700',
  'イベント': 'bg-green-100 text-green-700',
  'レポート': 'bg-purple-100 text-purple-700',
}

export default function NewsSection() {
  return (
    <section id="news" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            お知らせ・ニュース
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            大会情報やイベントの最新情報をお届けします
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <time>{item.date}</time>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs text-gray-500"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            すべてのニュースを見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}