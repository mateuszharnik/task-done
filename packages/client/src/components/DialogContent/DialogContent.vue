<template>
  <v-card class="max-modal-content-width mx-auto">
    <slot />
  </v-card>
</template>

<style lang="scss" scoped>
.max-modal-content-width {
  width: 100%;
  min-width: 272px;
  max-width: 360px;

  @media (min-width: 600px) {
    min-width: 450px;
    max-width: 450px;
  }
}
</style>
