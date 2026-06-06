import { certificates } from "@/data/certificates";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
    title: "Credentials",
};

export default function CredentialsPage() {
    return (
        <div className="py-12 md:py-16">
            <PageHeader
                title="Credentials"
                subtitle="Certifications, awards, and credentials."
            />

            {certificates.length > 0 ? (
                <div className="space-y-4">
                    {certificates.map((cert, i) => (
                        <FadeIn key={cert.title} delay={i * 0.08}>
                            <Card>
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h2 className="text-lg font-semibold text-zinc-100">
                                        {cert.title}
                                    </h2>
                                    {cert.date && (
                                        <span className="text-sm text-zinc-500">{cert.date}</span>
                                    )}
                                </div>
                                <p className="mt-1 text-sm text-blue-400">{cert.issuer}</p>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block text-sm text-zinc-400 hover:text-blue-400"
                                    >
                                        View credential →
                                    </a>
                                )}
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            ) : (
                <p className="text-zinc-400">
                    No credentials yet. Add them in{" "}
                    <code className="text-zinc-300">src/data/certificates.ts</code>.
                </p>
            )}
        </div>
    );
}
