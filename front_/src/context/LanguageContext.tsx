"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('portfolio-language') as Language;

        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
            // Auto-detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (['en', 'fr', 'es'].includes(browserLang)) {
                setLanguage(browserLang as Language);
            }
        }
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('portfolio-language', lang);
        // Optional: update HTML lang attribute
        document.documentElement.lang = lang;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
