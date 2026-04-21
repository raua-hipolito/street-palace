import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eyewear.jpg";

const HeroSection = () => {
    return (
        <section className="relative h-[85vh] min-h-[650px] overflow-hidden">
            {/* Animated background image */}
            <motion.img
                src={heroImage}
                alt="Coleção de óculos premium"
                className="absolute inset-0 w-full h-full object-cover"
                width={1920}
                height={800}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Layered gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-transparent h-1/3" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-gold/30"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
                <motion.p
                    className="text-gold-light font-body text-sm tracking-[0.4em] uppercase mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Coleção 2026
                </motion.p>

                <motion.h1
                    className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Estilo que reflete{" "}
                    <motion.span
                        className="text-gradient-gold inline-block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        sua essência
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-cream/50 font-body text-lg mt-6 max-w-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Descubra nossa seleção exclusiva de armações e óculos de sol das melhores marcas do mundo.
                </motion.p>

                <motion.a
                    href="#catalogo"
                    className="mt-8 inline-flex items-center gap-3 bg-gold/90 hover:bg-gold text-primary-foreground font-body font-medium px-8 py-3.5 rounded-xl transition-all duration-500 hover:shadow-[0_0_40px_hsl(38_65%_50%/0.4)] hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Ver Catálogo
                    <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </motion.a>
            </div>

            {/* Decorative animated line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
            />
        </section>
    );
};

export default HeroSection;
