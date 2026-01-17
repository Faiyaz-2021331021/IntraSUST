import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Code, AlertTriangle, ArrowLeft, Trophy, Video, Book } from 'lucide-react';

const Rules = () => {
    return (
        <div className="min-h-screen relative py-20 px-4 font-mono">

            <div className="max-w-4xl mx-auto relative z-10">
                <Link to="/" className="text-cyan-400 hover:text-white mb-8 block font-medium">
                    <ArrowLeft size={32} />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Contest Rules</h1>
                    <p className="text-xl text-cyan-500 font-bold">Intra SUST Programming Contest - 2026</p>
                </motion.div>

                <div className="grid gap-12">
                    <Section
                        icon={<Clock className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" size={40} />}
                        title="Timing & Duration"
                        delay={0.2}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>The contest will run for exactly <strong className="text-white">4 hours</strong>.</li>
                            <li>Penalty for wrong submission is <strong className="text-white">20 minutes</strong>.</li>
                            <li>The contest platform will open 30 minutes before the start time.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<Trophy className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" size={40} />}
                        title="Finalist Selection"
                        delay={0.25}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>There will be <strong className="text-white">two preliminary contests</strong>.</li>
                            <li>From each preliminary, <strong className="text-white">30 participants</strong> will be selected (25 Merit + 5 Quota).</li>
                            <li><strong className="text-cyan-400">Quota (5 slots per preliminary):</strong>
                                <ul className="list-[circle] pl-6 mt-1 space-y-1 text-base text-gray-400">
                                    <li>Top 2 <strong className="text-white">Female participants</strong> (outside Top 25).</li>
                                    <li>Top 2 participants from <strong className="text-white">Batch 2024-2025</strong> (outside Top 25 & Female quota).</li>
                                    <li>Top 1 from <strong className="text-white">Other Departments</strong> (except CSE, SWE) (outside above quotas).</li>
                                </ul>
                            </li>
                            <li>Total <strong className="text-white">60 individuals</strong> will advance to the Final Contest.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<Code className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" size={40} />}
                        title="Environment"
                        delay={0.3}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>Allowed languages: C, C++, Java, Python.</li>
                            <li>Internet access is <strong className="text-red-400">strictly restricted</strong> to the contest platform only.</li>
                            <li>No USB drives or external devices allowed.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<AlertTriangle className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" size={40} />}
                        title="Code of Conduct"
                        delay={0.4}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>Plagiarism will lead to <strong className="text-red-400">immediate disqualification</strong>.</li>
                            <li>Respect fellow contestants and volunteers.</li>
                            <li>Any attempt to hack the judgment system is prohibited.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<Video className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]" size={40} />}
                        title="Screen Record"
                        delay={0.5}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            All <strong className="text-white">top 50</strong> must submit the screen recording of the whole preliminary contest (Using OBS or any other software). Those who fail to submit the screen recording will not be considered for the final submission.
                        </p>
                    </Section>

                    <Section
                        icon={<Book className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" size={40} />}
                        title="Codebook"
                        delay={0.6}
                    >
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-lg">
                            <li>Each participant can bring a <strong className="text-white">code book of 25 pages</strong>.</li>
                            <li>Only <strong className="text-white">hardcopy</strong> is allowed.</li>
                            <li><strong className="text-red-400">No online copy, soft copy, or GitHub</strong> access is permitted.</li>
                        </ul>
                    </Section>
                    <p>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Section = ({ icon, title, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="mb-8"
    // Unboxed: removed bg-white/10, border, shadow
    >
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-2">
            {icon}
            <h2 className="text-3xl font-bold text-white drop-shadow-md">{title}</h2>
        </div>
        <div className="leading-relaxed pl-2 border-l-2 border-cyan-500/20">
            {children}
        </div>
    </motion.div>

);

export default Rules;
