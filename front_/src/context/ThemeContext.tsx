"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>('system');
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

    const updateResolvedTheme = (t: Theme) => {
        if (t === 'system') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setResolvedTheme(isDark ? 'dark' : 'light');
        } else {
            setResolvedTheme(t);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') as Theme || 'system';
        setThemeState(savedTheme);
        updateResolvedTheme(savedTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (localStorage.getItem('portfolio-theme') === 'system' || !localStorage.getItem('portfolio-theme')) {
                updateResolvedTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const isDark = resolvedTheme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        document.documentElement.style.colorScheme = resolvedTheme;
    }, [resolvedTheme]);

    const setTheme = (t: Theme) => {
        setThemeState(t);
        localStorage.setItem('portfolio-theme', t);
        updateResolvedTheme(t);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
