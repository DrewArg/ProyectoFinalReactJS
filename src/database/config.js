import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB9Vm__xZJNvic1uOWmcdlJhlR8IZBop0M",
    authDomain: "bpra-ea403.firebaseapp.com",
    projectId: "bpra-ea403",
    storageBucket: "bpra-ea403.appspot.com",
    messagingSenderId: "687166942117",
    appId: "1:687166942117:web:34c065a56e4b9ff060564c",
    measurementId: "G-862MG5ZQ8K"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}