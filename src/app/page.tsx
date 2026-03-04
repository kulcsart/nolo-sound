import HeroSection from "@/components/sections/HeroSection";
import NewsFeedSection from "@/components/sections/NewsFeedSection";
import AboutSection from "@/components/sections/AboutSection";
import ArtistsSection from "@/components/sections/ArtistsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <NewsFeedSection />
      <AboutSection />
      <ArtistsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
