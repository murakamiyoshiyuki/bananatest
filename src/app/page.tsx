import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Gallery from '@/components/Gallery'
import NewsSection from '@/components/NewsSection'
import Reviews from '@/components/Reviews'
import ContactForm from '@/components/ContactForm'
import SocialMedia from '@/components/SocialMedia'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <main className="pt-16">
        <HeroSection />
        <PricingSection />
        <TestimonialsSection />
        <Gallery />
        <NewsSection />
        <Reviews />
        <ContactForm />
        <SocialMedia />
      </main>
      <Footer />
    </>
  )
}