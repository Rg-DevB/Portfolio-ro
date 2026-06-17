import { getAllPortfolioData } from '@/data/fetchData';
import ClientPage from './ClientPage';

export async function generateMetadata() {
  try {
    const portfolioData = await getAllPortfolioData();
    const profile = portfolioData.profile;

    if (profile?.title) {
      return {
        title: profile.title,
        description: profile.description || "Professional Portfolio"
      };
    }
  } catch (error) {
    console.error("Failed to fetch initial metadata", error);
  }

  return {
    title: "Portfolio",
    description: "Professional Portfolio"
  };
}

export default async function Page() {
  // Fetch all portfolio data at build time (static generation)
  const portfolioData = await getAllPortfolioData();

  return <ClientPage initialData={portfolioData} />;
}
