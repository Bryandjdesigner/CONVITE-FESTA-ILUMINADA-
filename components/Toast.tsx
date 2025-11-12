
import React from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-pink-500 text-slate-950 py-3 px-6 font-bold shadow-[0_0_30px_rgba(0,255,255,0.6)] z-[100] transition-all duration-300 ease-in-out border-t-2 border-white/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
        >
            {message}
        </div>
    );
};

export default Toast;
