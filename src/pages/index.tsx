import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import AttendantModal from "../components/AttendantModal";
import CategoryBar, { type Category } from "../components/CategoryBar";


import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import att1 from "@/assets/attendant-1.jpg";
import att2 from "@/assets/attendant-2.jpg";
import att3 from "@/assets/attendant-3.jpg";

type Product = {
    id: number;
    image: string;
    name: string;
    category: string;
    categoryId: string;
    price: string;
};

const categories: Category[] = [
    { id: "all", name: "Todos", image: product1 },
    { id: "juliete", name: "Juliete", image: product1 },
    { id: "penny", name: "Penny", image: product4 },
    { id: "romeo", name: "Romeo", image: product2 },
    { id: "double-x", name: "Double X", image: product6 },
    { id: "mars", name: "Mars", image: product5 },
    { id: "eye-jacket", name: "Eye Jacket", image: product3 },
    { id: "plate", name: "Plate", image: product2 },
    { id: "splice", name: "Splice", image: product6 },
    { id: "monster-dog", name: "Monster Dog", image: product4 },
    { id: "radar-ev", name: "Radar EV", image: product5 },
];

const products: Product[] = [
    { id: 1, image: product1, name: "JULIET 24K Super Torch", category: "Juliete", categoryId: "juliete", price: "R$ 489,00" },
    { id: 2, image: product2, name: "JULIET Black Super Torch", category: "Juliete", categoryId: "juliete", price: "R$ 489,00" },
    { id: 3, image: product3, name: "JULIET Metal Pinado 24K", category: "Juliete", categoryId: "juliete", price: "R$ 519,00" },
    { id: 4, image: product4, name: "JULIET Polished Espelhada", category: "Juliete", categoryId: "juliete", price: "R$ 529,00" },
    { id: 5, image: product5, name: "Penny X-Metal Ruby", category: "Penny", categoryId: "penny", price: "R$ 459,00" },
    { id: 6, image: product6, name: "Penny Black Iridium", category: "Penny", categoryId: "penny", price: "R$ 449,00" },
    { id: 7, image: product2, name: "Romeo 1 Plasma Fire", category: "Romeo", categoryId: "romeo", price: "R$ 599,00" },
    { id: 8, image: product1, name: "Romeo 2 X-Metal", category: "Romeo", categoryId: "romeo", price: "R$ 629,00" },
    { id: 9, image: product6, name: "Double X Plasma Black", category: "Double X", categoryId: "double-x", price: "R$ 559,00" },
    { id: 10, image: product3, name: "Double X 24K Gold", category: "Double X", categoryId: "double-x", price: "R$ 579,00" },
    { id: 11, image: product5, name: "Mars X-Metal Ruby", category: "Mars", categoryId: "mars", price: "R$ 489,00" },
    { id: 12, image: product4, name: "Mars Polished Emerald", category: "Mars", categoryId: "mars", price: "R$ 499,00" },
    { id: 13, image: product3, name: "Eye Jacket Redux Sapphire", category: "Eye Jacket", categoryId: "eye-jacket", price: "R$ 389,00" },
    { id: 14, image: product1, name: "Eye Jacket Persimmon", category: "Eye Jacket", categoryId: "eye-jacket", price: "R$ 399,00" },
    { id: 15, image: product2, name: "Plate Lente Fire", category: "Plate", categoryId: "plate", price: "R$ 429,00" },
    { id: 16, image: product6, name: "Splice Black Iridium", category: "Splice", categoryId: "splice", price: "R$ 439,00" },
    { id: 17, image: product4, name: "Monster Dog Polished", category: "Monster Dog", categoryId: "monster-dog", price: "R$ 369,00" },
    { id: 18, image: product5, name: "Radar EV Path Prizm", category: "Radar EV", categoryId: "radar-ev", price: "R$ 549,00" },
];

const attendantsList = [
    { name: "Ana Paula", role: "Óculos de Sol", img: att1 },
    { name: "Carlos Eduardo", role: "Óculos de Grau", img: att2 },
    { name: "Márcia Helena", role: "Consultoria Premium", img: att3 },
];

const Index = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = useMemo(
        () =>
            selectedCategory === "all"
                ? products
                : products.filter((p) => p.categoryId === selectedCategory),
        [selectedCategory]
    );

    const currentCategoryName =
        categories.find((c) => c.id === selectedCategory)?.name ?? "Todos";

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
                        Escolha uma categoria e explore os modelos. Clique em "Quero este" para falar com um especialista.
                    </p>
                </motion.div>

                <CategoryBar
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />

                <motion.div
                    className="catalog-current"
                    key={`title-${selectedCategory}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="catalog-current__title">{currentCategoryName}</h3>
                    <span className="catalog-current__count">
                        {filteredProducts.length} {filteredProducts.length === 1 ? "modelo" : "modelos"}
                    </span>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        className="products-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {filteredProducts.map((product, i) => (
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
                    </motion.div>
                </AnimatePresence>
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
