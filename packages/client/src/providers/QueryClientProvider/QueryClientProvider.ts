import type { App } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import QueryService from '@services/queryService';

const { instance: queryClient } = QueryService;

const QueryClientProvider = (app: App<Element>) => app.use(VueQueryPlugin, { queryClient });

export default QueryClientProvider;
