import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { 
    getFirestore, 
    collection, 
    getCountFromServer 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCr23hGbCdMYpoe2_wb3GGWDVPYI_VMVDk",
    authDomain: "meerut-betterment-founda-292e4.firebaseapp.com",
    projectId: "meerut-betterment-founda-292e4",
    storageBucket: "meerut-betterment-founda-292e4.firebasestorage.app",
    messagingSenderId: "202138992469",
    appId: "1:202138992469:web:3630d882dd1c24afea79dc"
};


const app = initializeApp(firebaseConfig);

console.log("Firebase.js loaded");

export const db = getFirestore(app);


// Volunteer Counter

const volunteersRef = collection(db, "volunteers");


getCountFromServer(volunteersRef)
.then((snapshot) => {

    const count = snapshot.data().count;

    const counter = document.getElementById("volunteerCount");

    if (counter) {
        counter.setAttribute("data-target", count);
        counter.innerHTML = count;
    }

})
.catch((error) => {

    console.log("Error getting volunteer count:", error);

});