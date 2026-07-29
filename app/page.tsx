import { Effects } from "@/components/effects"
import { BackgroundFx } from "@/components/sections/background-fx"
import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { HeroScreenshot } from "@/components/sections/hero-screenshot"
import { Problem } from "@/components/sections/problem"
import { Features } from "@/components/sections/features"
import { AgentsBoard } from "@/components/sections/agents-board"
import { Why } from "@/components/sections/why"
import { Themes } from "@/components/sections/themes"
import { Install } from "@/components/sections/install"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main id="dc-root" className="dc-root">
      <BackgroundFx />
      <Nav />
      <Hero />
      <HeroScreenshot />
      <Problem />
      <Features />
      <AgentsBoard />
      <Why />
      <Themes />
      <Install />
      <Faq />
      <FinalCta />
      <Footer />
      <Effects />
    </main>
  )
}
