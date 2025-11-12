
import React, { useState, useEffect, useMemo } from 'react';

interface MainCountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (target: Date): TimeLeft | null => {
    const difference = +target - +new Date();
    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return null;
};

const MainCountdown: React.FC<MainCountdownProps> = ({ targetDate }) => {
    const target = useMemo(() => new Date(targetDate), [targetDate]);
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => calculateTimeLeft(target));

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(target);
            setTimeLeft(newTimeLeft);
            if (!newTimeLeft) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [target]);

    const TimeUnit: React.FC<{ value: number, label: string }> = ({ value, label }) => (
        <div className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-900/50 border border-cyan-400/30 backdrop-blur-sm">
            <div className="absolute inset-0 border-2 border-cyan-400/50 m-1 animate-pulse"></div>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-cyan-300 [text-shadow:0_0_15px_#00ffff,0_0_25px_#00ffff]">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-sm md:text-base font-bold text-white/80 uppercase tracking-widest mt-1">
                {label}
            </span>
        </div>
    );

    if (!timeLeft) {
        return (
            <section className="flex items-center justify-center my-8 md:my-12 py-4">
                 <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-400 [text-shadow:0_0_15px_#ff00c1,0_0_25px_#ff00c1] tracking-widest animate-pulse">
                    A FESTA COMEÇOU!
                </h3>
            </section>
        );
    }

    return (
        <section className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 my-8 md:my-12 py-4">
            <TimeUnit value={timeLeft.days} label="Dias" />
            <TimeUnit value={timeLeft.hours} label="Horas" />
            <TimeUnit value={timeLeft.minutes} label="Minutos" />
            <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </section>
    );
};

export default MainCountdown;