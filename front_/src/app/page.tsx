import ClientPage from './ClientPage';
import axios from 'axios';
import https from 'https';

export async function generateMetadata() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://backend_api.test/api/v1";
    
    // Use an agent to ignore local SSL rejection (common for local .test routes)
    const agent = new https.Agent({ rejectUnauthorized: false });
    
    const response = await axios.get(`${baseUrl}/profils`, { httpsAgent: agent });
    const profile = response.data?.data?.[0] || response.data?.[0];
    
    if (profile?.title) {
      return {
        title: profile.title,
        description: profile.description || "Portfolio professionnel"
      };
    }
  } catch (error) {
    console.error("Failed to fetch initial metadata", error);
  }
  
  return {
    title: "Portfolio",
  };
}

export default function Page() {
  return <ClientPage />;
}
