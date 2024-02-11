import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060606] overflow-hidden">
      <Navbar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <CertificationsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
