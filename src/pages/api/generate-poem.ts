import type { NextApiRequest, NextApiResponse } from "next";
import { getMastra } from "../../mastra";

type ResponseData = {
  poem?: string;
  location?: string;
  weather?: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    conditions: string;
  };
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { location } = req.body;

  if (!location || typeof location !== "string") {
    return res.status(400).json({ error: "Location is required" });
  }

  // Extract the poem from the response content
  let poemContent = "No poem was generated";

  try {
    const mastra = getMastra();
    const poetryAgent = mastra.getAgent("poetryAgent");
    const response = await poetryAgent.generate(
      `Creeer een gedicht voor de locatie ${location} met tijdstip ${new Date().toLocaleTimeString()} op de datum ${new Date().toLocaleDateString()}`
    );

    // Get the weather data from the response
    let weatherData = {
      result: {
        temperature: 0,
        feelsLike: 0,
        humidity: 0,
        windSpeed: 0,
        conditions: "Unknown",
      },
    };

    try {
      if (response.toolResults) {
        // Extract the poem from the response content
        poemContent = response.text;
      }
    } catch (e) {
      console.error("Error accessing weather data:", e);
    }

    return res.status(200).json({
      poem: poemContent,
      location,
      weather: {
        temperature: weatherData.result.temperature || 0,
        feelsLike: weatherData.result.feelsLike || 0,
        humidity: weatherData.result.humidity || 0,
        windSpeed: weatherData.result.windSpeed || 0,
        conditions: weatherData.result.conditions || "Unknown",
      },
    });
  } catch (error) {
    console.error("Error generating poem:", error);
    return res.status(500).json({ error: "Failed to generate poem" });
  }
}
