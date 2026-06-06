export default function GlowOrb() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-indigo-500 top-1/4 left-2/3" />
            <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-pink-500 top-2/3 left-1/4" />
        </div>
    );
}