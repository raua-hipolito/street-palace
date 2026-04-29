import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import attendant1 from "@/assets/attendant-1.jpg";
import attendant2 from "@/assets/attendant-2.jpg";
// import attendant3 from "@/assets/attendant-3.jpg";

const attendants = [
    // {
    //     name: "Ana Paula",
    //     specialty: "Óculos de Sol",
    //     phone: "5511999990001",
    //     image: attendant1,
    //     description: "Especialista em óculos de sol e tendências de moda.",
    // },
    {
        name: "Caio Ferreira",
        specialty: "Atendente",
        phone: "559184078927",
        image: attendant2,
        description: "Expert em lentes e armações de grau para seu conforto.",
    },
    // {
    //     name: "Márcia Helena",
    //     specialty: "Consultoria Premium",
    //     phone: "5511999990003",
    //     image: attendant3,
    //     description: "Atendimento VIP com consultoria personalizada de estilo.",
    // },
];

interface AttendantModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    productName: string;
}

const AttendantModal = ({ open, onOpenChange, productName }: AttendantModalProps) => {
    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onOpenChange(false);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open, onOpenChange]);

    const handleSelect = (attendant: typeof attendants[0]) => {
        const message = encodeURIComponent(
            `Olá ${attendant.name}! Tenho interesse no produto: *${productName}*. Poderia me ajudar?`
        );
        window.open(`https://wa.me/${attendant.phone}?text=${message}`, "_blank");
        onOpenChange(false);
    };

    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="attendant-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => onOpenChange(false)}
                >
                    <motion.div
                        className="attendant-modal__dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="attendant-modal-title"
                        aria-describedby="attendant-modal-description"
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button className="attendant-modal__close" type="button" onClick={() => onOpenChange(false)} aria-label="Fechar modal">
                            ×
                        </button>

                        <div className="attendant-modal__header">
                            <h2 className="attendant-modal__title" id="attendant-modal-title">Escolha seu atendente</h2>
                            <p className="attendant-modal__description" id="attendant-modal-description">
                                Selecione um especialista para atendimento sobre <span>{productName}</span>
                            </p>
                        </div>

                        <div className="attendant-modal__list">
                            {attendants.map((attendant, i) => (
                                <motion.button
                                    key={attendant.name}
                                    onClick={() => handleSelect(attendant)}
                                    className="attendant-modal__item"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: "easeOut" }}
                                    whileHover={{ x: 6, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="attendant-modal__avatar-wrap">
                                        <motion.img
                                            src={attendant.image}
                                            alt={attendant.name}
                                            className="attendant-modal__avatar"
                                            width={56}
                                            height={56}
                                            whileHover={{ scale: 1.1 }}
                                        />
                                        <motion.div
                                            className="attendant-modal__status"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </div>
                                    <div className="attendant-modal__content">
                                        <h4 className="attendant-modal__name">{attendant.name}</h4>
                                        <p className="attendant-modal__specialty">{attendant.specialty}</p>
                                        <p className="attendant-modal__text">{attendant.description}</p>
                                    </div>
                                    <motion.svg
                                        className="attendant-modal__arrow"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </motion.svg>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default AttendantModal;