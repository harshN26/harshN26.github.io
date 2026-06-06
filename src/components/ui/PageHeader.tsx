import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <FadeIn className="mb-12">
            <SectionHeading subtitle={subtitle}>{title}</SectionHeading>
        </FadeIn>
    );
}
