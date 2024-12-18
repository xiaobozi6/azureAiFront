<!-- frontend/src/components/Results.vue -->

<template>
    <v-card class="pa-4" elevation="10" v-if="result">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card-title class="headline">AI Response</v-card-title>
          <v-divider></v-divider>
          <v-card-text>{{ result }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'AiResults',
    props: {
      result: {
        type: String,
        required: false,
        default: '',
      },
    },
  }
  </script>
  
  <style scoped>
  .v-card-title {
    color: #1976D2;
    font-weight: bold;
  }
  </style>
  