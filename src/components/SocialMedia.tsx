'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/banana-competition',
    color: 'hover:bg-blue-600',
    followers: '12.5K',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/banana_comp_jp',
    color: 'hover:bg-sky-500',
    followers: '8.3K',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/banana_competition',
    color: 'hover:bg-pink-600',
    followers: '15.2K',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@banana-competition',
    color: 'hover:bg-red-600',
    followers: '5.7K',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/banana-competition',
    color: 'hover:bg-blue-700',
    followers: '3.1K',
  },
]

export default function SocialMedia() {
  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ソーシャルメディア
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            最新情報をいち早くお届けします。フォローして情報をチェック！
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 ${social.color} hover:text-white`}>
                <social.icon className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-1">{social.name}</h3>
                <p className="text-sm text-primary-200 group-hover:text-white">
                  {social.followers} フォロワー
                </p>
                <ExternalLink className="w-4 h-4 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">ハッシュタグキャンペーン実施中！</h3>
            <p className="text-primary-100 mb-4">
              #バナナ早食い競争 #BananaChampion のハッシュタグを付けて投稿すると、
              抽選で素敵なプレゼントが当たります！
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-banana-400 text-gray-900 px-4 py-2 rounded-full font-medium">
                #バナナ早食い競争
              </span>
              <span className="bg-banana-400 text-gray-900 px-4 py-2 rounded-full font-medium">
                #BananaChampion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}