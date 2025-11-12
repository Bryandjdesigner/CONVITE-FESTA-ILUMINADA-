
import React from 'react';

interface CtaProps {
    onPixButtonClick: () => void;
    ctaText: string;
    impactPhrase: string;
}

const Cta: React.FC<CtaProps> = ({ onPixButtonClick, ctaText, impactPhrase }) => {
    return (
        <section className="flex flex-col items-center w-full mt-4">
            
            <div className="w-full bg-slate-900/50 border border-pink-500/30 backdrop-blur-sm p-4 sm:p-5 text-center mb-6 md:mb-8">
                <p className="text-sm sm:text-base text-white/90 leading-normal m-0 tracking-wider">{ctaText}</p>
            </div>

            <button
                onClick={onPixButtonClick}
                className="w-full bg-cyan-400/90 border-t-2 border-cyan-200 text-slate-950 p-4 text-base sm:text-lg font-bold uppercase tracking-widest cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 ease-in-out hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] active:scale-95 mb-6 md:mb-8"
            >
                💳 Garantir Ingresso via PIX
            </button>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-pink-400 via-cyan-300 to-pink-400 bg-200% bg-clip-text text-transparent animate-gradient-shift m-0">
                {impactPhrase}
            </p>
        </section>
    );
};

export default Cta;