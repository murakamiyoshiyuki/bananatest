'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'スタンダード',
    price: '50,000',
    description: '個人参加者向けの基本プラン',
    features: [
      '大会参加権',
      'オリジナルTシャツ',
      '参加証明書',
      'バナナ食べ放題',
    ],
    popular: false,
  },
  {
    name: 'プレミアム',
    price: '100,000',
    description: '経営者向けの特別プラン',
    features: [
      'VIP席での観戦',
      'ネットワーキングイベント参加',
      '企業PR機会',
      'オリジナルグッズセット',
      '特別トレーニング講座',
      '優勝者との交流会',
    ],
    popular: true,
  },
  {
    name: 'スポンサー',
    price: '500,000',
    description: '企業スポンサー向けプラン',
    features: [
      '企業ロゴ掲載',
      'ブース出展権',
      '従業員参加枠（10名）',
      '特別広告枠',
      'メディア露出機会',
      'データ分析レポート',
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            参加プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            あなたのビジネスステージに合わせた最適なプランをお選びください
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </div>
                </div>
              )}

              <div className={`card h-full ${plan.popular ? 'border-2 border-primary-600' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary-600">¥{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ 人</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  このプランで申し込む
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}