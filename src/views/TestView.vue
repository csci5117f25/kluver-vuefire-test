<script setup>
import { computed, ref, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc, updateDoc } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const test_source = computed(() =>
  doc(db, 'tests', route.params.id)
)

const test = useDocument(test_source)

const edit_text = ref("")
const edit_mode = ref(false)

watch(test, (new_data, old_data)=>{
  if (! new_data) {
    router.push("/")
  } else {
    edit_mode.value = false
    edit_text.value = new_data.name
  }
})

async function update() {
  await updateDoc(test_source.value, {name:edit_text.value})
  edit_mode.value = false
}

</script>

<template>
      <RouterLink :to="{ name: 'test_w_id', params: { id: 'b3LKbwD0rv65G8EnvYoY' } }">test</RouterLink>
      <RouterLink :to="{ name: 'test_w_id', params: { id: '78bhKDifBy1sbZodcdZp' } }">other test</RouterLink>
      <RouterLink :to="{ name: 'test_w_id', params: { id: '12' } }">third test</RouterLink>

    <div v-if="!edit_mode">{{test}} <span @click="edit_mode = true">(edit)</span></div>
    <div v-if="edit_mode">
      <input v-model="edit_text"><button @click="update()">save</button>
    </div>
</template>

<style scoped></style>
