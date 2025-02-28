import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import PoemDisplay from '../components/PoemDisplay';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

interface PoemData {
  poem: string;
  location: string;
  weather: {
    temperature: number;
    conditions: string;
  };
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [poemData, setPoemData] = useState<PoemData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generatePoem = async (location: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate-poem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate poem');
      }
      
      const data = await response.json();
      
      // Check if we got a valid response with poem and weather data
      if (!data.poem) {
        throw new Error('No poem was generated');
      }
      
      // Create a structured poem data object with proper fallbacks
      setPoemData({
        poem: data.poem || 'No poem was generated',
        location: data.location || location,
        weather: {
          temperature: data.weather?.temperature || 0,
          conditions: data.weather?.conditions || 'Unknown'
        }
      });
    } catch (err) {
      console.error('Error generating poem:', err);
      setError('Could not generate a poem for this location. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <HomeContainer>
        <Hero>
          <Title>Weather Poetry</Title>
          <Subtitle>
            Enter a location to generate a unique poem inspired by the current 
            weather conditions in that place.
          </Subtitle>
        </Hero>
        
        <SearchForm onSubmit={generatePoem} isLoading={isLoading} />
        
        {isLoading && (
          <LoadingContainer>
            <p>Creating your weather-inspired poem...</p>
          </LoadingContainer>
        )}
        
        {error && (
          <LoadingContainer>
            <p style={{ color: '#ff7675' }}>{error}</p>
          </LoadingContainer>
        )}
        
        {poemData && !isLoading && (
          <PoemDisplay 
            poem={poemData.poem} 
            location={poemData.location} 
            weather={poemData.weather} 
          />
        )}
      </HomeContainer>
    </Layout>
  );
}