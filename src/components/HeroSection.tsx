import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eyewear.jpg";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <motion.img
                src={heroImage}
                alt="Coleção de óculos premium"
                className="hero-section__image"
                width={1920}
                height={800}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <div className="hero-section__gradient hero-section__gradient--horizontal" />
            <div className="hero-section__gradient hero-section__gradient--vertical" />
            <div className="hero-section__gradient hero-section__gradient--top" />

            <div className="hero-section__particles" aria-hidden="true">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="hero-section__particle"
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

            <div className="hero-section__content">
                <motion.p
                    className="hero-section__eyebrow"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Coleção 2026
                </motion.p>

                <motion.h1
                    className="hero-section__title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Estilo que reflete{" "}
                    <motion.span
                        className="gradient-text hero-section__title-highlight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        sua essência
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="hero-section__copy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Descubra nossa seleção exclusiva de armações e óculos de sol das melhores marcas do mundo.
                </motion.p>

                <motion.a
                    href="#catalogo"
                    className="hero-section__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Ver Catálogo
                    <motion.svg
                        className="hero-section__cta-icon"
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

            <motion.div
                className="hero-section__bottom-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
            />
        </section>
    );
};

export default HeroSection;
