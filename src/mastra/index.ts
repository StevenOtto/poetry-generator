import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { poetryAgent } from "./agents";

// Create a singleton instance of Mastra
let mastraInstance: Mastra | null = null;

export function getMastra() {
  if (!mastraInstance) {
    mastraInstance = new Mastra({
      agents: { poetryAgent },
      logger: createLogger({
        name: "Mastra",
        level: "info",
      }),
      
    });
  }
  return mastraInstance;
}

// For compatibility with existing code
export const mastra = getMastra();
