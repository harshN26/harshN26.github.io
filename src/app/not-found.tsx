import Button from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-zinc-700">404</h1>
            <p className="mt-4 text-zinc-400">Page not found.</p>
            <Button href="/" className="mt-8">
                Back home
            </Button>
        </div>
    );
}
