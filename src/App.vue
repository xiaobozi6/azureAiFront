<!-- frontend/src/App.vue -->

<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="text-center">AI-Powered Search</h1>
          <SearchBar :loading="loading" @search="performSearch" />
          <AiResults :result="response" v-if="response"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import AiResults from './components/AiResults.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    AiResults,
  },
  setup() {
    const loading = ref(false)
    const response = ref(null)

    const performSearch = async (query) => {
      loading.value = true
      try {
        const res = await axios.post('https://azuraiend-c9fuc7afa0ewb6f4.eastasia-01.azurewebsites.net/query', { query })
        response.value = res.data.answer
      } catch (error) {
        response.value = 'Error retrieving answer.'
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      response,
      performSearch,
    }
  },
}
</script>

<style>
h1 {
  font-size: 2rem;
  color: #1E88E5;
  margin-bottom: 20px;
}
</style>
