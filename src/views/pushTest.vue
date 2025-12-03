<script setup>
import { ref } from 'vue'
import { getMessaging, getToken } from "firebase/messaging";
import { firebaseApp } from '@/firebase_conf';


function pushTest() {
   Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
            const messaging = getMessaging(firebaseApp);
            getToken(messaging, {vapidKey: "BCC5czufa_EMeNvLOgbv7iB18H5sj8jtxUyMhmymKoHCzwZZMEsajZjKRRfDuvYAmRvEhrqeB2RhgCOcJ4TsbDU"})
            .then(console.log)
      }
    }
   )


}
</script>

<template>
  <button @click="pushTest()">Request Permission</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
