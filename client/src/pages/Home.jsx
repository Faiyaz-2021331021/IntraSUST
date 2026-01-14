import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Code2,
    Trophy,
    BookOpen,
    Handshake,
    Zap,
    Terminal,
    BrainCircuit,
    Calendar
} from "lucide-react";

const Home = () => {
    /* ===== Theme ===== */
    const pageBgColor = "#000000"; // Let Canvas handle BG
    const buttonBgColor = "rgba(6, 182, 212, 0.1)"; // Cyan tint
    const buttonTextColor = "#22d3ee"; // Cyan-400
    const borderColor = "#0891b2"; // Cyan-600

    /* ===== Button Animation ===== */
    const floatingVariant = (delay) => ({
        animate: {
            y: [0, -5, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }
        }
    });

    return (
        <div
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 font-mono"
        >

            <div className="relative z-10 w-full max-w-[1800px] flex flex-col items-center pointer-events-auto">
                {/* ===== HERO ===== */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-6"
                    >
                        <span className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 font-mono backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            <BrainCircuit size={40} className="text-cyan-400" />
                            <span className="text-2xl md:text-3xl font-bold tracking-wider">
                                Intra SUST Programming Contest - 2026
                            </span>
                        </span>
                    </motion.div>

                    {/* Welcome Slogan - Unboxed, High Visibility */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg md:text-2xl font-medium leading-relaxed text-cyan-100 drop-shadow-lg font-mono text-center tracking-wide">
                            Intra SUST Programming Contest 2026 is an annual competitive programming contest organized for all students of Shahjalal University of Science and Technology (SUST). Open to participants from every department, the contest challenges students with a diverse set of engaging and thought-provoking problems, fostering problem-solving skills, logical thinking, and a passion for competitive programming.
                        </p>
                    </div>
                </motion.div>

                {/* Explicit Spacer to force gap */}
                <div style={{ height: '50px' }} className="w-full"></div>

                {/* ===== BUTTONS ===== */}
                <div
                    className="flex justify-center items-center flex-wrap w-full"
                    style={{ gap: '50px' }}
                >
                    <NavCard
                        to="/register"
                        icon={<Code2 size={18} />}
                        title="Register"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/schedule"
                        icon={<Calendar size={18} />}
                        title="Schedule"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/prizepool"
                        icon={<Trophy size={18} />}
                        title="Prize Pool"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/rules"
                        icon={<BookOpen size={18} />}
                        title="Rulebook"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                    <NavCard
                        to="/sponsors"
                        icon={<Handshake size={18} />}
                        title="Sponsors"
                        delay={0}
                        variants={floatingVariant}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        borderColor={borderColor}
                    />
                </div>
            </div>
        </div>
    );
};

const NavCard = ({
    to,
    icon,
    title,
    delay,
    variants,
    bgColor,
    textColor,
    borderColor
}) => (
    <motion.div
        variants={variants(delay)}
        animate="animate"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
        style={{ width: '150px', height: '70px' }}
    >
        <div
            className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition"
            style={{ backgroundColor: bgColor }}
        />

        <Link to={to} className="block h-full w-full no-underline hover:no-underline">
            <div
                className="relative h-full w-full rounded-full flex items-center justify-center gap-3 px-4 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                    backgroundColor: bgColor,
                    border: `1px solid ${borderColor}`
                }}
            >
                <div className="flex items-center gap-2">
                    <div
                        className="p-1.5 rounded-full bg-white/10 group-hover:rotate-12 transition-transform"
                        style={{ color: textColor }}
                    >
                        {React.cloneElement(icon, { color: textColor })}
                    </div>

                    <h3 className="text-sm font-bold tracking-wide" style={{ color: textColor }}>
                        {title}
                    </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
        </Link>
    </motion.div>
);

export default Home;
