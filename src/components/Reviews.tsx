'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp, MessageCircle } from 'lucide-react'

type Review = {
  id: number
  author: string
  company: string
  rating: number
  date: string
  content: string
  helpful: number
  replies: number
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: '鈴木 一郎',
    company: '鈴木商事株式会社',
    rating: 5,
    date: '2024年1月20日',
    content: '素晴らしいイベントでした！社員のモチベーション向上にも繋がり、新しいビジネスパートナーとも出会えました。来年も必ず参加します。',
    helpful: 24,
    replies: 3,
  },
  {
    id: 2,
    author: '高橋 美香',
    company: 'タカハシフーズ',
    rating: 5,
    date: '2024年1月15日',
    content: 'バナナの新しい可能性を発見できました。イベント後、弊社でもバナナを使った新商品開発をスタートしました。',
    helpful: 18,
    replies: 2,
  },
  {
    id: 3,
    author: '伊藤 健太',
    company: 'イトウホールディングス',
    rating: 4,
    date: '2024年1月10日',
    content: '運営もスムーズで、参加者同士の交流も活発でした。ただ、会場がもう少し広いとより良かったと思います。',
    helpful: 12,
    replies: 1,
  },
]

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    author: '',
    company: '',
    rating: 5,
    content: '',
  })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toLocaleDateString('ja-JP'),
      helpful: 0,
      replies: 0,
    }
    setReviews([review, ...reviews])
    setNewReview({ author: '', company: '', rating: 5, content: '' })
    setShowReviewForm(false)
  }

  const handleHelpful = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, helpful: review.helpful + 1 } : review
    ))
  }

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            参加者レビュー
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            実際に参加された方々の生の声をお届けします
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="btn-primary"
          >
            レビューを投稿する
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showReviewForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <form onSubmit={handleSubmitReview} className="card max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">レビューを投稿</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お名前
                    </label>
                    <input
                      type="text"
                      value={newReview.author}
                      onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      value={newReview.company}
                      onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    評価
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'fill-banana-400 text-banana-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    レビュー内容
                  </label>
                  <textarea
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="btn-primary">
                    投稿する
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="btn-secondary"
                  >
                    キャンセル
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{review.author}</h3>
                  <p className="text-sm text-gray-600">{review.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'fill-banana-400 text-banana-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{review.content}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <button
                  onClick={() => handleHelpful(review.id)}
                  className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  役に立った ({review.helpful})
                </button>
                <button className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  返信 ({review.replies})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}