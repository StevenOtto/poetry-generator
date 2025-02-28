import styled from 'styled-components';

interface PoemDisplayProps {
  poem: string;
  location: string;
  weather: {
    temperature: number;
    conditions: string;
  };
}

const PoemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const PoemTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const PoemContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  white-space: pre-line;
  font-style: italic;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const PoemDisplay = ({ poem, location, weather }: PoemDisplayProps) => {
  return (
    <PoemContainer>
      <PoemTitle>Inspired by the weather in {location}</PoemTitle>
      <PoemContent>{poem}</PoemContent>
      <WeatherInfo>
        <span>{weather.temperature}°C</span>
        <span>•</span>
        <span>{weather.conditions}</span>
      </WeatherInfo>
    </PoemContainer>
  );
};

export default PoemDisplay;