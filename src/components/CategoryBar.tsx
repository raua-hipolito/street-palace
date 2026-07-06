import { motion } from "framer-motion";

export interface Category {
    id: string;
    name: string;
    image: string;
}

interface CategoryBarProps {
    categories: Category[];
    selected: string;
    onSelect: (id: string) => void;
}

const CategoryBar = ({ categories, selected, onSelect }: CategoryBarProps) => {
    return (
        <div className="category-bar">
            <div className="category-bar__header">
                <h3 className="category-bar__title">Categorias</h3>
            </div>
            <div className="category-bar__scroll">
                <div className="category-bar__track">
                    {categories.map((cat, i) => {
                        const isActive = selected === cat.id;
                        return (
                            <motion.button
                                key={cat.id}
                                type="button"
                                className={`category-chip ${isActive ? "category-chip--active" : ""}`}
                                onClick={() => onSelect(cat.id)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="category-chip__avatar-wrap">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        loading="lazy"
                                        className="category-chip__avatar"
                                    />
                                    {isActive && (
                                        <motion.span
                                            className="category-chip__ring"
                                            layoutId="category-active-ring"
                                            transition={{ type: "spring", stiffness: 280, damping: 26 }}
                                        />
                                    )}
                                </span>
                                <span className="category-chip__name">{cat.name}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;
