// src/pages/api/test-weather.ts
// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import { weatherTool } from "../../mastra/tools";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { location } = req.body || {};

  try {
    const result = await weatherTool.execute!({
      context: {
        location: location || "Amsterdam",
        steps: {},
        triggerData: {},
        attempts: {},
        getStepResult: () => undefined,
      },
    });
    return res.status(200).json({
      success: true,
      weather: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Weather tool failed",
      errorType: error,
    });
  }
}
