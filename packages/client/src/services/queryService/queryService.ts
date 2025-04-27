import { QueryClient, type QueryClientConfig } from '@tanstack/vue-query';

class QueryService {
  private client: QueryClient;

  constructor(config?: QueryClientConfig) {
    this.client = new QueryClient(config);
  }

  get instance(): QueryClient { return this.client; }
}

const queryService = new QueryService();

export default queryService;
