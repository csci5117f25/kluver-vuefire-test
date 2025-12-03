<script setup>
import { useCurrentUser } from 'vuefire'
import TheWelcome from '../components/TheWelcome.vue'
const user = useCurrentUser()

</script>

<template>
  <main>
    {{user}}
    <TheWelcome />
  </main>
</template>
