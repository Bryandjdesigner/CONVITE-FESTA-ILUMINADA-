
import React, { useState, useCallback } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import MainCountdown from './components/MainCountdown';
import EventInfo from './components/EventInfo';
import Cta from './components/Cta';
import PixModal from './components/PixModal';
import Toast from './components/Toast';
import Logo from './components/Logo';
import { type EventData } from './types';

const eventData: EventData = {
    mainTitle: "NOITE DO BOTA",
    subtitle: "A NOITE DOS RITMOS",
    djs: "VENHA CURTIR COM A GENTE",
    eventDate: "29 DE NOVEMBRO (SÁBADO) ÀS 22H",
    targetDate: '2025-11-29T22:00:00',
    priceLocal: "R$20",
    priceAdvance: "R$15",
    pixKey: "21965844958",
    pixName: "Marcelo Pedreira dos Santos",
    callToAction: "VENHA CURTIR UMA NOITE ILUMINADA COM BOA MÚSICA E MUITA ENERGIA.",
    impactPhrase: "A NOITE VAI BRILHAR!",
};

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isToastVisible, setIsToastVisible] = useState(false);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);
    
    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const showToast = useCallback(() => {
        setIsToastVisible(true);
        setTimeout(() => {
            setIsToastVisible(false);
        }, 2000);
    }, []);

    const priceMatch = eventData.priceAdvance.match(/R\$\s*(\d+)/);
    const pixAmount = priceMatch ? `R$ ${priceMatch[1]},00` : eventData.priceAdvance;

    return (
        <div className="flyer-container relative w-full max-w-4xl min-h-screen mx-auto bg-slate-950/50 overflow-y-auto overflow-x-hidden shadow-[0_0_100px_rgba(255,0,193,0.3)] my-0 sm:my-8 border border-pink-500/20">
            <AnimatedBackground />
            
            <main className="relative z-10 min-h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
                <Logo />
                <Header 
                    title={eventData.mainTitle} 
                    subtitle={eventData.subtitle} />
                <MainCountdown targetDate={eventData.targetDate} />
                <EventInfo 
                    djs={eventData.djs}
                    date={eventData.eventDate} 
                    priceLocal={eventData.priceLocal} 
                    priceAdvance={eventData.priceAdvance}
                />
                <Cta
                    onPixButtonClick={handleOpenModal}
                    ctaText={eventData.callToAction}
                    impactPhrase={eventData.impactPhrase}
                />
            </main>

            <PixModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                pixAmount={pixAmount}
                pixKey={eventData.pixKey}
                pixName={eventData.pixName}
                onCopy={showToast}
            />
            <Toast message="Chave PIX copiada!" isVisible={isToastVisible} />
        </div>
    );
};

export default App;