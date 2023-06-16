import React, { useState, useEffect } from "react";
import "./Patientlogin"
import "./Patientsprofile";
import { db } from "./firebase";
import "./Seeprofile.css";
import { auth } from "./firebase";

function Seeprofile() {
  const [profile, setProfile] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        fetchProfileData(user.email);
      }
    });
  }, []);

  const fetchProfileData = async (email) => {
    try {
      const snapshot = await db
        .collection("profile")
        .where("patientEmail", "==", email)
        .get();

      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfile(fetchedData);
    } catch (error) {
      console.error("Error fetching data from Firestore: ", error);
    }
  };

  return (
    <div className="profile">
      <div className="container1">
        <h2>My Profile</h2>
        {currentUser && profile.length > 0 ? (
          <ul>
            {profile.map((item) => (
              <li key={item.id}>
                <h3>Name - {item.name}</h3>
                <h3>Age - {item.age}</h3>
                <h3>Medicine - {item.Medicine}</h3>
                <h3>Dosage-{item.Dosage}</h3>
                <h3>Time - {item.Time}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p>No profile data available</p>
        )}
      </div>
    </div>
  );
}

export default Seeprofile;
