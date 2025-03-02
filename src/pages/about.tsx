import styled from 'styled-components';
import Layout from '../components/Layout';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

export default function About() {
  return (
    <Layout>
      <AboutContainer>
        <Title>Over Poëzie Dagboek</Title>
        
        <Section>
          <SectionTitle>Onze Missie</SectionTitle>
          <Paragraph>
            Poëzie Dagboek brengt de natuurlijke wereld en artistieke expressie samen. 
            Wij geloven dat weer krachtige emoties en beelden oproept die prachtig 
            kunnen worden vastgelegd in poëzie.
          </Paragraph>
          <Paragraph>
            Onze AI-dichter is ontworpen om unieke gedichten te creëren, geïnspireerd door 
            real-time weersomstandigheden van elke locatie ter wereld. Elk gedicht is een 
            unieke weerspiegeling van de atmosfeer, temperatuur en omstandigheden van een specifieke plaats.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Hoe Het Werkt</SectionTitle>
          <Paragraph>
            Wanneer je een locatie invoert, haalt ons systeem actuele weergegevens op voor die 
            plaats, waaronder temperatuur, luchtvochtigheid, windomstandigheden en algemene weerstaat.
          </Paragraph>
          <Paragraph>
            Deze informatie wordt vervolgens verwerkt door onze AI-poëzie agent, die een 
            gedicht creëert dat de essentie van dat weer belichaamt. Zonnige dagen kunnen 
            heldere, vrolijke verzen inspireren, terwijl stormen meer dramatische en krachtige regels kunnen oproepen.
          </Paragraph>
          <Paragraph>
            Elk gedicht is volledig uniek, zelfs voor dezelfde locatie door de tijd heen, 
            omdat weersomstandigheden veranderen.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Neem Contact Op</SectionTitle>
          <Paragraph>
            Heb je vragen, suggesties of feedback? We horen graag van je! 
            Neem contact met ons op via poezie@poeziedagboek.nl.
          </Paragraph>
        </Section>
      </AboutContainer>
    </Layout>
  );
}