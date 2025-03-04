# Weather Poetry

A Next.js application that uses AI to generate poems inspired by the current weather conditions of any location in the world.

## Features

- Search for any location to get weather-inspired poetry
- Real-time weather data integration
- Responsive design with styled-components
- AI-powered poetry generation using Mastra and Claude

## Tech Stack

- **Frontend**: Next.js, React, styled-components
- **AI**: Mastra framework with Claude AI
- **API**: Weather data from Open-Meteo

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-poetry.git
cd weather-poetry
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/src
  /components        # Reusable UI components
  /mastra            # AI agent configuration
    /agents          # Poetry agent definition
    /tools           # Weather tool and utilities
  /pages             # Next.js pages and API routes
  /styles            # Global styles and theme
```

## Usage

1. Enter a location in the search bar (e.g., "Paris", "Tokyo", "New York")
2. Click "Generate Poem"
3. View the AI-generated poem inspired by the current weather in that location

## Deployment

### Deploying to Netlify

This project is configured for easy deployment to Netlify.

Netlify will automatically deploy your site when you push changes to your repository.

### Environment Variables

The Mastra AI API requires the following environment variables:

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for Claude access |

To set these locally during development:

1. Create a `.env.local` file in the root directory
2. Add your environment variables:
   ```
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ```

## License

This project is licensed under the ISC License.
