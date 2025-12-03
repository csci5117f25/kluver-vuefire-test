 const {onSchedule} = require("firebase-functions/v2/scheduler");

 const logger = require("firebase-functions/logger");

 // The Firebase Admin SDK to access Firestore.
 const {initializeApp} = require("firebase-admin/app");
 const {getFirestore} = require("firebase-admin/firestore");
 const {getMessaging} = require("firebase-admin/messaging");

 initializeApp();


 // Create and deploy your first functions
 // https://firebase.google.com/docs/functions/get-started

 // Run once a day at midnight, to clean up the users
 // Manually run the task here https://console.cloud.google.com/cloudscheduler
 exports.test = onSchedule("every day 8:10", async (event) => {
 const payload = {
     "token":"eVJR-hVMdG2jsHrvSTzpyW:APA91bH9m57cdpi8j6co1cBTPvcuCqsmtXU2Vz-qU0uh7i0Ta84hJRf5rgtOqDtxvy1ygx8OqA_dC9-UoemYbwn5-u1jgVkxf9ZWU8Cdhcu9e_bYe6cqSgw",
     "notification":{
     "title":"Start Lecture",
     "body":"DO IT!"
     }
 }
 getMessaging().send(payload)
 })