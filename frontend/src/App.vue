<script setup lang="ts">
const phase = 'Phase 0 – Projektfundament';
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>EV.Digital</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="pa-4" variant="outlined">
          <v-card-title>Einsatzversorgung Digital</v-card-title>
          <v-card-subtitle>{{ phase }}</v-card-subtitle>
          <v-card-text> Das Frontend-Skelett läuft. Implementierung folgt in Phase 1. </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
