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
        <Title>About Weather Poetry</Title>
        
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Weather Poetry brings together the natural world and artistic expression. 
            We believe that weather evokes powerful emotions and imagery that can be 
            beautifully captured through poetry.
          </Paragraph>
          <Paragraph>
            Our AI poet is designed to create unique poems inspired by real-time 
            weather conditions from any location in the world. Each poem is a unique 
            reflection of the atmosphere, temperature, and conditions of a specific place.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>How It Works</SectionTitle>
          <Paragraph>
            When you enter a location, our system fetches current weather data for that 
            place including temperature, humidity, wind conditions, and general weather state.
          </Paragraph>
          <Paragraph>
            This information is then processed by our AI poetry agent, which creates a 
            poem that embodies the essence of that weather. Sunny days might inspire 
            bright, cheerful verses, while storms could evoke more dramatic and powerful lines.
          </Paragraph>
          <Paragraph>
            Each poem is completely unique, even for the same location over time, as weather 
            conditions change.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            Have questions, suggestions, or feedback? We'd love to hear from you! 
            Contact us at poetry@weatherpoetry.com.
          </Paragraph>
        </Section>
      </AboutContainer>
    </Layout>
  );
}