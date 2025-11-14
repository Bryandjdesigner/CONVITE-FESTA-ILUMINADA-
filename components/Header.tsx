import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header>
            <div className="main-title text-center my-8 sm:my-10">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none m-0 animate-neon-flicker">
                    {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-cyan-300 text-center tracking-[0.3em] uppercase [text-shadow:0_0_10px_#00ffff,_0_0_20px_#00ffff] mt-2 font-light">
                    {subtitle}
                </p>
            </div>
        </header>
    );
};

export default Header;