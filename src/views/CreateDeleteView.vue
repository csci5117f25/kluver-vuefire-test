<script>
    const provider = new GoogleAuthProvider();
</script>


<script setup>
import { ref } from 'vue'
import { useCollection, useCurrentUser, useFirebaseAuth } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const tests = useCollection(collection(db, 'tests'))
const user = useCurrentUser()
const auth = useFirebaseAuth()

async function login() {
    try {
        const result = await signInWithPopup(auth, provider)

    } catch {
        alert("oh no");
    }
}async function logout() {
    try {
        const result = await signOut(auth)
    } catch {
        alert("oh no");
    }
}

const input_data = ref("");

async function create() {
    // note -- this returns useful stuff if you have "next tasks" -- but we don't have key steps for data syncronization
    await addDoc(collection(db, "tests"), {name:input_data.value});
    input_data.value = ""
}

async function remove(name_id) {
    await deleteDoc(doc(db, "tests", name_id));
}

</script>

<template>
    <button @click="login()" v-if="!user">log in</button>
    <button @click="logout()" v-else>log out</button>
    <input v-model="input_data"><button @click="create()">add</button>
    <ul v-for="test in tests" :key="test.id">
        <li>
            <RouterLink :to="{ name: 'test_w_id', params: { id: test.id } }">{{test.name}}</RouterLink> <button @click="remove(test.id)">delete</button>
        </li>
    </ul>
</template>

<style scoped></style>
