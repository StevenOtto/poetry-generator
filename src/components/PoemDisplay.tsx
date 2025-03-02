import styled from "styled-components";

interface PoemDisplayProps {
  poem: string;
  location: string;
  weather: {
    temperature: number;
    conditions: string;
  };
}

const PoemContainer = styled.div`
  background-color: #d25b3169;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 700px;
  width: 100%;
  margin: 2rem auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const PoemDate = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 500;
  text-align: center;
`;

const PoemTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
  text-align: center;
`;

const PoemContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-style: italic;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const PoemAuthor = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 500;
  text-align: center;
`;

const PoemExplanation = styled.div`
  font-size: 0.85rem;
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.dark};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: left;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PoemDisplay = ({ poem, location, weather }: PoemDisplayProps) => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .toUpperCase();

  // Split poem into parts
  const poemText = poem.trim();

  // Look for specific explanation marker
  const explanationMarker = "Uitleg:";
  const explanationIndex = poemText.indexOf(explanationMarker);

  let title, content, explanation;

  if (explanationIndex !== -1) {
    // We found an explanation section
    const poemPart = poemText.substring(0, explanationIndex).trim();
    explanation = poemText
      .substring(explanationIndex + explanationMarker.length)
      .trim();

    // Now split the poem part into title and content
    const poemLines = poemPart.split("\n");
    title = poemLines.length > 0 ? poemLines[0] : "Poëzie in beweging";
    content = poemLines.length > 1 ? poemLines.slice(1).join("\n") : "";
  } else {
    // No explanation found, treat the whole text as the poem
    const poemLines = poemText.split("\n");
    title = poemLines.length > 0 ? poemLines[0] : "Poëzie in beweging";
    content = poemLines.length > 1 ? poemLines.slice(1).join("\n") : "";
    explanation = "";
  }

  return (
    <PoemContainer>
      <PoemDate>{formattedDate}</PoemDate>
      <PoemTitle>{title}</PoemTitle>
      <PoemContent>{content}</PoemContent>

      {explanation && (
        <PoemExplanation>
          <b>
            Uitleg: <br />
          </b>
          {explanation}
        </PoemExplanation>
      )}

      <WeatherInfo>
        <span>{weather.temperature}°C</span>
        <span>•</span>
        <span>{weather.conditions}</span>
        <span>•</span>
        <span>{location}</span>
      </WeatherInfo>
    </PoemContainer>
  );
};

export default PoemDisplay;
