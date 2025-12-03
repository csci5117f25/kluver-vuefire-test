// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
// import { onBackgroundMessage } from "firebase/messaging/sw";

// const firebaseConfig = {
//   apiKey: "AIzaSyBAD46ThM5Rq-PiZs1vCK6Ff82YYczz-rw",
//   authDomain: "lec21-test.firebaseapp.com",
//   projectId: "lec21-test",
//   storageBucket: "lec21-test.firebasestorage.app",
//   messagingSenderId: "114123285847",
//   appId: "1:114123285847:web:8b4bc1ebbd9cc743c40a12"
// };
// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });