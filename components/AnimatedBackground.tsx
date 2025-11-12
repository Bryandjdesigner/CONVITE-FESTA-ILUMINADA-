
import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute w-full h-full top-0 left-0 opacity-80 pointer-events-none overflow-hidden">
            {/* Animated background glows */}
            <div className="absolute w-full h-full top-0 left-0">
                <div className="glow-orb absolute rounded-full blur-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_#ff00c1_0%,_transparent_60%)] top-[-20%] left-[-20%] animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="glow-orb absolute rounded-full blur-[100px] w-[450px] h-[450px] bg-[radial-gradient(circle,_#00ffff_0%,_transparent_60%)] top-[40%] right-[-15%] animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="glow-orb absolute rounded-full blur-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,_#9e00ff_0%,_transparent_60%)] bottom-[-10%] left-[20%] animate-float" style={{ animationDelay: '6s' }}></div>
            </div>
             {/* Smoky Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
        </div>
    );
};

export default AnimatedBackground;