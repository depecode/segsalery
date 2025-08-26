import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import About from "./components/About"
import Programs from "./components/Programs"
import FinancialTransperancy from "./components/FinancialTransperancy"
import Support from "./components/Support"
import Testimonials from "./components/Testimonials"
import Social from "./components/Social"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Programs />
      <FinancialTransperancy />
      <Support />
      <Testimonials />
      <Social />
      <Footer />
    </main>
  )
}

