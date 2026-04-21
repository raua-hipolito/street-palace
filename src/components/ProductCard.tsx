import { motion } from "framer-motion";

interface ProductCardProps {
    image: string;
    name: string;
    category: string;
    price: string;
    onSelect: () => void;
    index: number;
}

const ProductCard = ({ image, name, category, price, onSelect, index }: ProductCardProps) => {
    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
                y: -8,
                boxShadow: "0 0 30px hsl(38 65% 50% / 0.12), 0 20px 60px hsl(220 15% 5% / 0.4)",
            }}
        >
            <div className="product-card__media">
                <motion.img
                    src={image}
                    alt={name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="product-card__image"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="product-card__overlay" />
                <motion.button
                    onClick={onSelect}
                    className="product-card__cta"
                    whileTap={{ scale: 0.95 }}
                >
                    Quero este
                </motion.button>
            </div>
            <div className="product-card__body">
                <p className="product-card__category">{category}</p>
                <h3 className="product-card__name">{name}</h3>
                <div className="product-card__footer">
                    <span className="product-card__price">{price}</span>
                    <motion.div
                        className="product-card__plus"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                        <svg className="product-card__plus-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
