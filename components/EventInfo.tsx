
import React from 'react';

interface EventInfoProps {
    djs: string;
    date: string;
    priceLocal: string;
    priceAdvance: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ djs, date, priceLocal, priceAdvance }) => {
    return (
        <section className="bg-slate-900/50 border border-cyan-300/30 backdrop-blur-sm p-4 sm:p-6 my-6 md:my-8 flex flex-col gap-4">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 [text-shadow:0_0_10px_#ff00c1] tracking-widest">{djs}</h2>
            </div>
          
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left pt-4">
                <div className="flex-1">
                    <span className="text-base md:text-lg text-cyan-300 uppercase tracking-wider font-bold [text-shadow:0_0_10px_#00ffff]">📅 {date}</span>
                </div>
                <div className="flex gap-4">
                    <div className="text-center">
                        <div className="text-xs md:text-sm text-cyan-300 uppercase mb-1 tracking-wide">No Local</div>
                        <div className="text-xl md:text-2xl text-cyan-300 font-black [text-shadow:0_0_8px_rgba(0,255,255,0.7)]">{priceLocal}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs md:text-sm text-pink-400 uppercase mb-1 tracking-wide">Antecipado</div>
                        <div className="text-xl md:text-2xl text-pink-400 font-black [text-shadow:0_0_8px_rgba(255,0,193,0.7)]">{priceAdvance}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventInfo;