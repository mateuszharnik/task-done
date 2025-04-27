import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import colors from 'vuetify/util/colors';

const VuetifyProvider = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VExpansionPanels: {
      flat: true,
    },
    VChip: {
      variant: 'flat',
    },
    VSheet: {
      color: 'transparent',
      flat: true,
    },
    VBtn: {
      class: 'text-none',
      variant: 'elevated',
      slim: false,
    },
    VSelect: {
      density: 'comfortable',
      variant: 'outlined',
    },
    VTextarea: {
      density: 'comfortable',
      variant: 'outlined',
    },
    VTextField: {
      density: 'comfortable',
      variant: 'outlined',
    },
    VToolbar: {
      VBtn: {
        variant: 'elevated',
        slim: false,
      },
    },
    VCard: {
      variant: 'flat',
    },
    VCardActions: {
      VBtn: {
        variant: 'elevated',
        slim: false,
      },
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: colors.orange.darken2,
          secondary: '#232323',
          'secondary-darken-1': colors.grey.darken4,
        },
      },
    },
  },
});

export default VuetifyProvider;
