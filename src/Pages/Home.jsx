import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/NavBar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            {<Navbar />}

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}