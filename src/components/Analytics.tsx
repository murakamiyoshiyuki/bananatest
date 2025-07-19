'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Schema.org markup for SEO */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: '全日本バナナ早食い競争',
            description: 'バナナの果物の地位を上げる！メロンやマンゴーなんかに負けない！',
            startDate: '2024-05-01T10:00:00+09:00',
            endDate: '2024-05-01T18:00:00+09:00',
            location: {
              '@type': 'Place',
              name: '東京ビッグサイト',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '江東区有明3-11-1',
                addressLocality: '東京都',
                postalCode: '135-0063',
                addressCountry: 'JP',
              },
            },
            organizer: {
              '@type': 'Organization',
              name: '全日本バナナ早食い競争実行委員会',
              url: 'https://banana-competition.jp',
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'スタンダード',
                price: '50000',
                priceCurrency: 'JPY',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'プレミアム',
                price: '100000',
                priceCurrency: 'JPY',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'スポンサー',
                price: '500000',
                priceCurrency: 'JPY',
                availability: 'https://schema.org/InStock',
              },
            ],
          }),
        }}
      />
    </>
  )
}