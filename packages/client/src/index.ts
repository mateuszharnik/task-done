import { createApp } from 'vue';

import RouterProvider from '@providers/RouterProvider';
import I18nextProvider from '@providers/I18nextProvider';
import VuetifyProvider from '@providers/VuetifyProvider';
import QueryClientProvider from '@providers/QueryClientProvider';
import App from '@app';

import '@assets/styles/main.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const app = createApp(App);

app.use(RouterProvider);
app.use(VuetifyProvider);
app.use(QueryClientProvider);
app.use(I18nextProvider);

app.mount('#app');
