import useSWR from 'swr';
import axiosInstance from '../lib/axios';

const fetchAllData = async () => {
    const [
        profileRes,
        skillsRes,
        projectsRes,
        experienceRes,
        educationRes,
        socialsRes
    ] = await Promise.all([
        axiosInstance.get('/profils'),
        axiosInstance.get('/skills'),
        axiosInstance.get('/projects'),
        axiosInstance.get('/experiences'),
        axiosInstance.get('/education'),
        axiosInstance.get('/socials')
    ]);

    return {
        profile: profileRes.data.data?.[0] || profileRes.data[0] || null,
        skills: skillsRes.data.data || skillsRes.data || [],
        projects: projectsRes.data.data || projectsRes.data || [],
        experience: experienceRes.data.data || experienceRes.data || [],
        education: educationRes.data.data || educationRes.data || [],
        socials: socialsRes.data.data || socialsRes.data || []
    };
};

export const usePortfolioData = () => {
    const { data, error, isLoading } = useSWR('portfolio-all-data', fetchAllData, {
        revalidateOnFocus: true, // Automagically refetches when user switches back to the tab
        revalidateIfStale: true, // Always verify in background
        revalidateOnReconnect: true, // Fetch after connection drop
    });

    return {
        profile: data?.profile || null,
        skills: data?.skills || [],
        projects: data?.projects || [],
        experience: data?.experience || [],
        education: data?.education || [],
        socials: data?.socials || [],
        // Only show loading screen if we literally have no cached data at all to display
        isLoading: isLoading && typeof data === 'undefined',
        error: error ? (error.message || 'Failed to fetch portfolio data') : null
    };
};
