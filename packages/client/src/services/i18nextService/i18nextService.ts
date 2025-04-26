import i18next, { type i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { pl } from '@locales';

class I18nextService {
  private client: i18n = i18next;

  constructor() {
    this.init();
  }

  private init = () => {
    this.client
      .use(LanguageDetector)
      .init({
        lng: 'pl',
        fallbackLng: 'pl',
        resources: {
          pl,
        },
      });
  };

  get t(): i18n['t'] { return this.client.t; }

  get instance(): i18n { return this.client; }
}

const i18nextService = new I18nextService();

export default i18nextService;
