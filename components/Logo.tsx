import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="flex justify-center items-center my-4 md:my-8 px-4">
            <svg viewBox="0 0 500 120" className="w-full max-w-md" aria-labelledby="logo-title">
                <title id="logo-title">Logo Emoções Dance Club</title>
                <defs>
                    <filter id="neon-white" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="neon-red" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                         <feComponentTransfer in="blur" result="boostedBlur">
                            <feFuncA type="linear" slope="1.5"></feFuncA>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode in="boostedBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                     <radialGradient id="heart-gradient">
                        <stop offset="0%" stopColor="#ff4d4d" />
                        <stop offset="50%" stopColor="#ff1a1a" />
                        <stop offset="100%" stopColor="#e60000" />
                    </radialGradient>
                </defs>

                {/* Wires - subtle background detail */}
                <path d="M0,60 C50,40 150,80 250,60 C350,40 450,80 500,60" stroke="#101010" strokeWidth="1" fill="none" opacity="0.7" />
                 <path d="M120,110 C180,120 280,100 380,110" stroke="#101010" strokeWidth="1" fill="none" opacity="0.7" />

                {/* Main Text - EMOÇÕES */}
                <g style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '50px', fill: '#fff' }} filter="url(#neon-white)">
                    <text x="42" y="70" textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff">EM</text>
                    <text x="266" y="70" textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff">ÇÕES</text>
                </g>

                {/* Heart */}
                <g transform="translate(167, 30) scale(3.5)">
                   <path 
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="url(#heart-gradient)" 
                        filter="url(#neon-red)" 
                        stroke="#ff4d4d"
                        strokeWidth="0.5"
                    />
                </g>

                {/* Sub Text - DANCE CLUB */}
                <g style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '20px', fill: '#fff', letterSpacing: '0.3em' }} filter="url(#neon-white)">
                    <text x="163" y="110" textShadow="0 0 2px #fff, 0 0 5px #fff">DANCE CLUB</text>
                </g>
            </svg>
        </div>
    );
};

export default Logo;