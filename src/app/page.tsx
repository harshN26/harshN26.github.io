import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsCloud from "@/components/home/SkillsCloud";
import CurrentProjects from "@/components/home/CurrentProjects";
import ResearchPreview from "@/components/home/ResearchPreview";
import ContactCTA from "@/components/home/ContactCTA";
import Divider from "@/components/ui/Divider";

export default function Home() {
    return (
        <>
            <Hero />
            <Divider />
            <About />
            <Divider />
            <FeaturedProjects />
            <Divider />
            <SkillsCloud />
            <Divider />
            <CurrentProjects />
            <Divider />
            <ResearchPreview />
            <ContactCTA />
        </>
    );
}
