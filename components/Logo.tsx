import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="flex justify-center items-center my-4 md:my-8 px-4">
            <svg viewBox="0 0 500 120" className="w-full max-w-md" aria-labelledby="logo-title">
                <title id="logo-title">Logo Noite do Bota</title>
                <defs>
                    <filter id="neon-white" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Wires - subtle background detail */}
                <path d="M0,60 C50,40 150,80 250,60 C350,40 450,80 500,60" stroke="#101010" strokeWidth="1" fill="none" opacity="0.7" />
                 <path d="M120,110 C180,120 280,100 380,110" stroke="#101010" strokeWidth="1" fill="none" opacity="0.7" />

                {/* Main Text - NOITE DO BOTA */}
                <g style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '45px', fill: '#fff', letterSpacing: '0.1em' }} filter="url(#neon-white)">
                    <text x="250" y="80" textAnchor="middle" style={{ textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff" }}>NOITE DO BOTA</text>
                </g>
            </svg>
        </div>
    );
};

export default Logo;