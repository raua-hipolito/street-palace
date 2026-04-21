import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import AttendantModal from "../components/AttendantModal";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import att1 from "@/assets/attendant-1.jpg";
import att2 from "@/assets/attendant-2.jpg";
import att3 from "@/assets/attendant-3.jpg";

const products = [
    { id: 1, image: product1, name: "Aviador Dourado", category: "Óculos de Sol", price: "R$ 489,00" },
    { id: 2, image: product2, name: "Urban Blue", category: "Óculos de Sol", price: "R$ 549,00" },
    { id: 3, image: product3, name: "Tortoise Classic", category: "Óculos de Grau", price: "R$ 379,00" },
    { id: 4, image: product4, name: "Rose Cat-Eye", category: "Óculos de Grau", price: "R$ 429,00" },
    { id: 5, image: product5, name: "Minimal Silver", category: "Óculos de Grau", price: "R$ 359,00" },
    { id: 6, image: product6, name: "Champagne Round", category: "Óculos de Sol", price: "R$ 519,00" },
];

const attendantsList = [
    { name: "Ana Paula", role: "Óculos de Sol", img: att1 },
    { name: "Carlos Eduardo", role: "Óculos de Grau", img: att2 },
    { name: "Márcia Helena", role: "Consultoria Premium", img: att3 },
];

const Index = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleProductSelect = (productName: string) => {
        setSelectedProduct(productName);
        setModalOpen(true);
    };

    return (
        <div className="catalog-page site-shell bg-noise">
            <motion.header
                className="catalog-header"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="catalog-header__inner container-shell">
                    <motion.h2
                        className="catalog-brand gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        ÓpticaLux
                    </motion.h2>
                    <nav className="catalog-nav">
                        {["Catálogo", "Atendimento"].map((link, i) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                className="catalog-nav__link"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </nav>
                </div>
            </motion.header>

            <HeroSection />

            <section id="catalogo" className="catalog-section container-shell">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="section-heading__eyebrow">Nossa Seleção</p>
                    <h2 className="section-heading__title">
                        Catálogo de <span className="gradient-text">Óculos</span>
                    </h2>
                    <motion.div
                        className="section-heading__line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <p className="section-heading__description">
                        Encontre o par perfeito. Clique em qualquer modelo para ser atendido por um de nossos especialistas.
                    </p>
                </motion.div>
                <div className="products-grid">
                    {products.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            index={i}
                            onSelect={() => handleProductSelect(product.name)}
                        />
                    ))}
                </div>
            </section>

            <div className="container-shell catalog-divider-wrap">
                <motion.div
                    className="catalog-divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <section id="atendimento" className="attendants-section">
                <div className="container-shell attendants-section__inner">
                    <motion.div
                        className="section-heading"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="section-heading__eyebrow">Atendimento</p>
                        <h2 className="section-heading__title">
                            Nossos <span className="gradient-text">Especialistas</span>
                        </h2>
                        <motion.div
                            className="section-heading__line"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <p className="section-heading__description section-heading__description--spaced">
                            Escolha o profissional ideal para lhe atender pelo WhatsApp.
                        </p>
                    </motion.div>
                    <div className="attendants-grid">
                        {attendantsList.map((a, i) => (
                            <motion.div
                                key={a.name}
                                className="attendant-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15 * i }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 0 40px hsl(38 65% 50% / 0.12), 0 20px 60px hsl(220 15% 5% / 0.4)",
                                }}
                            >
                                <div className="attendant-card__avatar-wrap">
                                    <motion.img
                                        src={a.img}
                                        alt={a.name}
                                        className="attendant-card__avatar"
                                        loading="lazy"
                                        width={112}
                                        height={112}
                                        whileHover={{ scale: 1.08, rotate: 3 }}
                                    />
                                    <motion.div
                                        className="attendant-card__status"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="attendant-card__ring"
                                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                    />
                                </div>
                                <h3 className="attendant-card__name">{a.name}</h3>
                                <p className="attendant-card__role">{a.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.footer
                className="catalog-footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="catalog-footer__inner container-shell">
                    <span className="catalog-footer__brand gradient-text">ÓpticaLux</span>
                    <span className="catalog-footer__copy">© 2026 ÓpticaLux. Todos os direitos reservados.</span>
                </div>
            </motion.footer>

            <AttendantModal open={modalOpen} onOpenChange={setModalOpen} productName={selectedProduct} />
        </div>
    );
};

export default Index;