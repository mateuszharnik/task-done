import type { App } from 'vue';
import I18NextVue from 'i18next-vue';

import i18nextService from '@services/i18nextService';

const { instance: i18next } = i18nextService;

const I18nextProvider = (app: App<Element>) => I18NextVue(app, { i18next });

export default I18nextProvider;
