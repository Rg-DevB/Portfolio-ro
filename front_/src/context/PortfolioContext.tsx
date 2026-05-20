"use client"

import React, { createContext, useContext, ReactNode } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import {
    ProfileData,
    Skill,
    Project,
    Experience,
    Education,
    Social
} from '../types';

interface PortfolioContextType {
    profile: ProfileData | null;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    education: Education[];
    socials: Social[];
    isLoading: boolean;
    error: string | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};

interface PortfolioProviderProps {
    children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
    const portfolioData = usePortfolioData();

    return (
        <PortfolioContext.Provider value={portfolioData}>
            {children}
        </PortfolioContext.Provider>
    );
};
