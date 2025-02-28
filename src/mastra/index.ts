
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { poetryAgent } from './agents';

export const mastra = new Mastra({
  agents: { poetryAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
