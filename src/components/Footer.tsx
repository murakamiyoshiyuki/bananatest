import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">全日本バナナ早食い競争</h3>
            <p className="text-gray-400">
              バナナの果物の地位を上げる！
              メロンやマンゴーなんかに負けない！
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">ホーム</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">料金</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">お客様の声</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">ギャラリー</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">お役立ち情報</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">よくある質問</Link></li>
              <li><Link href="/rules" className="text-gray-400 hover:text-white transition-colors">大会規約</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">利用規約</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>TEL: 0120-XXX-XXXX</li>
              <li>Email: info@banana-competition.jp</li>
              <li>営業時間: 平日 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 全日本バナナ早食い競争実行委員会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}