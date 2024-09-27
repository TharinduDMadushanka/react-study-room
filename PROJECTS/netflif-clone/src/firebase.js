
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Qs-Ou729xqQPRYdgsNDJGfGIUhMzHjI",
  authDomain: "netflix-clone-1bb90.firebaseapp.com",
  projectId: "netflix-clone-1bb90",
  storageBucket: "netflix-clone-1bb90.appspot.com",
  messagingSenderId: "363028733993",
  appId: "1:363028733993:web:62a7f14df6590240f7bc38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error){
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email,password)
    }catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db, login, signup, logout}