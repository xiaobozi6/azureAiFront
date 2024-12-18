<!-- frontend/src/components/SearchBar.vue -->

<template>
    <v-card class="pa-4" elevation="10">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-text-field
            v-model="query"
            label="What would you like to know?"
            prepend-icon="mdi-magnify"
            clearable
            @keyup.enter="onSearch"
            outlined
            dense
            hide-details
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        :loading="loading"
        :disabled="loading || !query.trim()"
        color="primary"
        class="mt-4"
        @click="onSearch"
        block
      >
        Ask
      </v-btn>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        query: '',
      }
    },
    methods: {
      onSearch() {
        if (this.query.trim() === '') return
        this.$emit('search', this.query)
      },
    },
  }
  </script>
  
  <style scoped>
  .v-btn {
    font-size: 1.1rem;
  }
  </style>
  