
import React, { useState, useEffect } from 'react';

interface PixModalProps {
    isOpen: boolean;
    onClose: () => void;
    pixAmount: string;
    pixName: string;
    pixKey: string;
    onCopy: () => void;
}

const PixStep: React.FC<{ number: number; children: React.ReactNode }> = ({ number, children }) => (
    <div className="flex items-center gap-4 mb-2 p-2 bg-slate-800/30 border-l-2 border-cyan-400">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-pink-500 font-black text-lg text-slate-900 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            {number}
        </div>
        <div className="flex-1 text-white text-sm sm:text-base leading-snug">{children}</div>
    </div>
);

const PixModal: React.FC<PixModalProps> = ({ isOpen, onClose, pixAmount, pixName, pixKey, onCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isOpen) {
           setTimeout(() => setIsCopied(false), 300);
        }
    }, [isOpen]);

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setIsCopied(true);
            onCopy();
            setTimeout(() => {
                setIsCopied(false);
            }, 2500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-slate-900/80 border-2 border-cyan-400/50 p-6 sm:p-8 max-w-lg w-full shadow-[0_0_60px_rgba(0,255,255,0.3)] relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-pink-500/80 border-none w-8 h-8 text-2xl font-bold text-white cursor-pointer shadow-[0_0_20px_rgba(255,0,193,0.6)] transition-all duration-300 hover:rotate-90 hover:shadow-[0_0_30px_rgba(255,0,193,0.8)] flex items-center justify-center leading-none"
                >
                    &times;
                </button>
                <h2 className="text-2xl sm:text-3xl text-cyan-300 text-center uppercase tracking-[0.2em] mb-6 [text-shadow:0_0_20px_#00ffff]">
                    💳 Pagamento PIX
                </h2>

                <div className="bg-slate-800/30 p-4 mb-6 border border-cyan-400/20">
                    <PixStep number={1}>Abra o app do seu banco</PixStep>
                    <PixStep number={2}>Selecione a opção PIX</PixStep>
                    <PixStep number={3}>Copie a chave PIX abaixo</PixStep>
                    <PixStep number={4}>Confirme o valor de: <strong className="text-cyan-300 [text-shadow:0_0_10px_#00ffff]">{pixAmount}</strong></PixStep>
                    <PixStep number={5}>Finalize o pagamento e salve o comprovante!</PixStep>
                </div>

                <div className="bg-slate-900/50 border border-pink-500/30 p-4 mb-4">
                    <div className="flex flex-col mb-3"><span className="text-sm text-pink-400 uppercase mb-1 tracking-wider">💰 Valor:</span> <span className="text-base sm:text-lg text-white font-bold">{pixAmount}</span></div>
                    <div className="flex flex-col mb-3"><span className="text-sm text-pink-400 uppercase mb-1 tracking-wider">👤 Para:</span> <span className="text-base sm:text-lg text-white font-bold">{pixName}</span></div>
                    <div className="flex flex-col"><span className="text-sm text-pink-400 uppercase mb-1 tracking-wider">🔑 Chave PIX:</span> <span className="text-base sm:text-lg text-white font-bold break-all">{pixKey}</span></div>
                </div>

                <button 
                    onClick={handleCopy}
                    className={`w-full p-4 text-base sm:text-lg font-bold uppercase text-slate-950 cursor-pointer transition-all duration-300 border-t-2 ${
                        isCopied 
                        ? 'bg-green-400 border-green-200' 
                        : 'bg-cyan-400 border-cyan-200 hover:bg-cyan-300 hover:shadow-[0_0_20px_#00ffff]'
                    }`}
                >
                    {isCopied ? '✓ Copiado!' : '📋 Copiar Chave PIX'}
                </button>
                 <p className="text-xs text-white/70 text-center leading-relaxed mt-4">💡 Após o pagamento, guarde o comprovante para apresentar na entrada do evento!</p>
            </div>
        </div>
    );
};

export default PixModal;