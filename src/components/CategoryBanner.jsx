import accentMap from "@/utils/accentMap";

export default function CategoryBanner({ title, subtitle, accent }) {


const color = accentMap[accent];
console.log(accent);
console.log(accentMap);
console.log(color);

  return (
    <section className="mb-14">

        

        {/* Banner Container */}
        <div
            className="
                banner-carbon
                relative
                overflow-hidden
                rounded-3xl
                bg-[#050505]
                h-[220px]
                md:h-[260px]
                flex
                items-center
                justify-center
            "
        >

        {/* Top Accent */}
        <div
            className={`
                absolute
                -left-20
                top-0
                w-[400px]
                h-[3px]
                ${color.lineSoft}
                rotate-12`}
        />

        {/* Bottom Accent */}
        <div
            className={`
                absolute
                right-0
                bottom-10
                w-[300px]
                h-[2px]
                ${color.lineLight}
                -rotate-12`}
        />

        {/* Vignette */}
        <div
            className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black
                via-transparent
                to-black
                opacity-45
            "
        />

        {/* Noise Texture */}
        <div
            className="
                absolute
                inset-0
                opacity-[0.03]
                mix-blend-overlay
                bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
                bg-[size:12px_12px]
                
            "
        />

        {/* Banner Content */}
        <div className="relative z-10 -translate-y-4 flex flex-col items-center">

            <h1
                className="
                    text-5xl
                    md:text-7xl
                    font-black
                    tracking-[0.35em]
                    text-white
                    drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
                "
            >
                {title.toUpperCase()}
            </h1>

            <p
                className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[0.45em]
                    text-gray-400
                "
            >
                {subtitle}
            </p>

        </div>

        {/* Laser Line */}
        <div
            className="
                absolute
                bottom-10
                left-1/2
                -translate-x-1/2
                w-72
                h-[2px]
                overflow-hidden
            "
        >

            {/* Base Line */}
            <div
                className={`
                    absolute
                    inset-0
                    ${color.lineLight}
                `}
            />

            {/* Scan Light */}
            <div
                className={`
                    absolute
                    top-0
                    left-0
                    h-full
                    w-20
                    scan-light
                `}
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.25) 20%, rgba(255,255,255,.95) 50%, rgba(255,255,255,.25) 80%, transparent 100%)",
                }}
            />

        </div>



        {/* Watermark */}
        <div
            className="
                absolute
                text-[160px]
                font-black
                italic
                text-white/[0.10]
                whitespace-nowrap
                select-none
                -rotate-12
                left-8
                top-1/2
                -translate-y-1/2
            "
            >
            RENTAKA
        </div>

        {/* Red Ambient Glow */}
        <div
            className={`absolute
                -right-24
                top-1/2
                -translate-y-1/2
                w-[420px]
                h-[320px]
                rounded-full
                ${color.lineSoft}
                blur-[120px]`}
            />
            
        </div>

    </section>
  );
}