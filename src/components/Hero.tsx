import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full flex flex-col items-center bg-slate-50">
            {/* Banner Image */}
            <div className="w-full">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/assets/hero-banner-sp.png" />
                    <img
                        src="/assets/hero-banner-pc.png"
                        alt="AIライティング実践講座"
                        className="w-full h-auto object-cover"
                    />
                </picture>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center mt-[-30px] md:mt-[-50px] max-w-4xl pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
                        {/* Real-time Participation */}
                        <motion.a
                            href="https://buy.stripe.com/28EeVfdCm8k09DTauJbV609"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-br from-[#FFECC0] via-[#D4AF37] to-[#B8860B] text-white font-bold rounded-xl shadow-lg shadow-yellow-500/40 relative overflow-hidden group border border-yellow-200/50 flex-1 w-full py-4 flex items-center justify-center gap-2"
                        >
                            {/* Gloss Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                            <div className="relative flex items-center justify-center gap-2 z-10 drop-shadow-md">
                                <Smartphone className="w-6 h-6" />
                                <span className="flex flex-col leading-tight items-start">
                                    <span className="text-lg">リアルタイム参加</span>
                                </span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto" />
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
