<script setup>
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import {db} from '../firebase_conf'

const tests = useCollection(collection(db, 'tests'))

</script>

<template>
    <div v-for="test in tests" :key="test.id">
        <span>{{test.name}}</span>
    </div>
</template>

<style scoped></style>
