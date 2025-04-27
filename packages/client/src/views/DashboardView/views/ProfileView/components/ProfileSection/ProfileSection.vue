<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

import Heading from '@components/Heading';
import Paragraph from '@components/Paragraph';

defineProps<{
  title: string;
  description: string;
}>();

const { xs } = useDisplay();

const textAlign = computed(() => (xs.value ? 'text-center' : 'text-left'));
</script>

<template>
  <v-sheet
    max-width="480px"
    class="mx-auto"
  >
    <div>
      <heading
        tag="h3"
        class="text-h6 font-weight-bold"
        :class="textAlign"
      >
        {{ title }}
      </heading>
      <paragraph
        class="font-italic text-subtitle-2 text-grey-darken-1"
        :class="textAlign"
      >
        {{ description }}
      </paragraph>
    </div>
    <slot />
  </v-sheet>
</template>
