import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

export default function SkillsCloud() {
    const categories = [...new Set(skills.map((s) => s.category).filter(Boolean))];

    return (
        <section className="py-16 md:py-24">
            <FadeIn>
                <SectionHeading subtitle="Tools, languages, and domains I work with">
                    Skills
                </SectionHeading>
            </FadeIn>

            {categories.length > 0 ? (
                <div className="mt-8 space-y-6">
                    {categories.map((category, ci) => (
                        <FadeIn key={category} delay={ci * 0.08}>
                            <div>
                                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills
                                        .filter((s) => s.category === category)
                                        .map((skill) => (
                                            <Badge key={skill.name}>{skill.name}</Badge>
                                        ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            ) : (
                <FadeIn className="mt-8">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill.name}>{skill.name}</Badge>
                        ))}
                    </div>
                </FadeIn>
            )}
        </section>
    );
}
