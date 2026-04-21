import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import attendant1 from "@/assets/attendant-1.jpg";
import attendant2 from "@/assets/attendant-2.jpg";
import attendant3 from "@/assets/attendant-3.jpg";

const attendants = [
    {
        name: "Ana Paula",
        specialty: "Óculos de Sol",
        phone: "5511999990001",
        image: attendant1,
        description: "Especialista em óculos de sol e tendências de moda.",
    },
    {
        name: "Carlos Eduardo",
        specialty: "Óculos de Grau",
        phone: "5511999990002",
        image: attendant2,
        description: "Expert em lentes e armações de grau para seu conforto.",
    },
    {
        name: "Márcia Helena",
        specialty: "Consultoria Premium",
        phone: "5511999990003",
        image: attendant3,
        description: "Atendimento VIP com consultoria personalizada de estilo.",
    },
];

interface AttendantModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    productName: string;
}

const AttendantModal = ({ open, onOpenChange, productName }: AttendantModalProps) => {
    const handleSelect = (attendant: typeof attendants[0]) => {
        const message = encodeURIComponent(
            `Olá ${attendant.name}! Tenho interesse no produto: *${productName}*. Poderia me ajudar?`
        );
        window.open(`https://wa.me/${attendant.phone}?text=${message}`, "_blank");
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg bg-card/95 border-border/50 backdrop-blur-2xl shadow-[0_0_80px_hsl(220_15%_5%/0.8)]">
                <DialogHeader>
                    <DialogTitle className="font-display text-2xl text-foreground">Escolha seu atendente</DialogTitle>
                    <DialogDescription className="font-body text-muted-foreground">
                        Selecione um especialista para atendimento sobre{" "}
                        <span className="font-semibold text-gold">{productName}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 mt-4">
                    <AnimatePresence>
                        {attendants.map((attendant, i) => (
                            <motion.button
                                key={attendant.name}
                                onClick={() => handleSelect(attendant)}
                                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-surface hover:bg-surface-hover hover:border-gold/40 transition-colors duration-300 text-left group"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: "easeOut" }}
                                whileHover={{ x: 6, scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative">
                                    <motion.img
                                        src={attendant.image}
                                        alt={attendant.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-border/50 group-hover:border-gold transition-all duration-400"
                                        width={56}
                                        height={56}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-card"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-display text-base text-foreground group-hover:text-gold-light transition-colors duration-300">{attendant.name}</h4>
                                    <p className="text-xs text-gold font-body font-medium">{attendant.specialty}</p>
                                    <p className="text-xs text-muted-foreground font-body mt-0.5 truncate">{attendant.description}</p>
                                </div>
                                <motion.svg
                                    className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors duration-300 flex-shrink-0"
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
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AttendantModal;