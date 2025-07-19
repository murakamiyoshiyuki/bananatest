'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: '田中 太郎',
    role: '株式会社ABC 代表取締役',
    company: 'IT企業',
    image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400',
    content: 'バナナ早食い競争への参加は、社内のチームビルディングに最適でした。普段は見られない社員の一面を発見でき、組織の結束力が高まりました。',
    rating: 5,
  },
  {
    name: '山田 花子',
    role: '山田商事 CEO',
    company: '商社',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    content: 'ネットワーキングイベントで多くの経営者と出会えました。バナナを通じた新しいビジネスアイデアも生まれ、参加して本当に良かったです。',
    rating: 5,
  },
  {
    name: '佐藤 健一',
    role: 'サトウフーズ 取締役',
    company: '食品業界',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    content: 'バナナの可能性を再認識しました。弊社でも新商品開発のヒントを得ることができ、ビジネスチャンスが広がりました。',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            参加者の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            全国の経営者から高い評価をいただいています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-banana-400 text-banana-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}