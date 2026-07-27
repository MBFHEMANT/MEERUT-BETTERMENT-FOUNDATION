import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const area = document.getElementById("area").value.trim();
    const availability = document.getElementById("availability").value;
    const role = document.getElementById("role").value;

    // Basic mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit Indian mobile number.");
        return;
    }

    try {

        // Use mobile number as document ID
        const volunteerRef = doc(db, "volunteers", mobile);

        const existingVolunteer = await getDoc(volunteerRef);

        if (existingVolunteer.exists()) {
            alert("This mobile number is already registered with Meerut Betterment Foundation.");
            return;
        }

         const volunteerID = "MBF-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 900000);

await setDoc(volunteerRef, {

    volunteerID,

    fullName,
    mobile,
    email,
    age,
    area,
    availability,
    role,

    status: "Active",

    drivesAttended: 0,

    treesPlanted: 0,

    volunteerHours: 0,

    createdAt: serverTimestamp()

});

        document.getElementById("volunteerID").innerText = volunteerID;

const registerModal = bootstrap.Modal.getInstance(document.getElementById("registerModal"));
registerModal.hide();

const successModal = new bootstrap.Modal(document.getElementById("successModal"));
successModal.show();

form.reset();

    }

   catch (error) {

    console.error("Firebase Error:", error);

    alert(error.message);

}

});