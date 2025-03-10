// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { toCamalCase } from "./string.utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBr-x0sfKfezjnYAzU79Si2weA0DiiL5g",
  authDomain: "farm-machinery-parts-ni.firebaseapp.com",
  projectId: "farm-machinery-parts-ni",
  storageBucket: "farm-machinery-parts-ni.firebasestorage.app",
  messagingSenderId: "827347336614",
  appId: "1:827347336614:web:b339bc9a5fcae9fcd9e367",
  measurementId: "G-CH93LP94ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const downloadAndSetImgUrl = (imageLocation, imgId) => {
  const storage = getStorage(app)
  const storageRef = ref(storage, imageLocation)
  getDownloadURL(storageRef)
  .then((url) => {
      const img = document.getElementById(imgId);
      img.setAttribute('src', url);
  })
  .catch((error) => {
      console.log("Could not download", error)
  });
}

const getFullColllection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = []
  querySnapshot.forEach(element => {
    docs.push(element.data())
  });

  return docs
}

const getHomeInfo = async () => {
  return getFullColllection("home-page-info")
}

const getPartsToSell = async () => {
  return getFullColllection("items")
}

const uploadImage = (image, title) => {
  const storage = getStorage(app)
  const titleCamalCase = toCamalCase(title)
  const storageRef = ref(storage, titleCamalCase);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, image).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

  return titleCamalCase
}

const uploadPartDoc = async (title, description, fileName) => {
  await addDoc(collection(db, "items"), {
    title: title,
    desciption: description,
    img_location: fileName
  });
}

export {auth, app, db, downloadAndSetImgUrl, getHomeInfo, getPartsToSell, uploadImage, uploadPartDoc}