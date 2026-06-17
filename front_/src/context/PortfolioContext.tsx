"use client"

import React, { createContext, useContext, ReactNode } from 'react';
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
    initialData?: {
        profile: ProfileData | null;
        skills: Skill[];
        projects: Project[];
        experience: Experience[];
        education: Education[];
        socials: Social[];
    };
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ 
    children, 
    initialData 
}) => {
    // If initial data is provided (from server), use it directly
    // Otherwise, we'll rely on SWR or other client-side fetching
    const [data, setData] = React.useState(initialData || {
        profile: null,
        skills: [],
        projects: [],
        experience: [],
        education: [],
        socials: []
    });
    
    const [isLoading, setIsLoading] = React.useState(!initialData);
    const [error, setError] = React.useState<string | null>(null);

    // Only fetch if no initial data was provided
    React.useEffect(() => {
        if (initialData) {
            setIsLoading(false);
            return;
        }

        // Fallback to client-side fetching if needed
        // This can be removed if you always pass initialData from server
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/portfolio');
                if (!response.ok) throw new Error('Failed to fetch portfolio data');
                const portfolioData = await response.json();
                setData(portfolioData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [initialData]);

    return (
        <PortfolioContext.Provider value={{
            ...data,
            isLoading,
            error
        }}>
            {children}
        </PortfolioContext.Provider>
    );
};
