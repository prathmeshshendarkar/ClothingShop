import { initializeApp } from 'firebase/app';
import { signInWithPopup , GoogleAuthProvider , getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCioCrg1Tljc37byoh209TbP_b3xtc3fCU",
  authDomain: "clothingshop-b6fb9.firebaseapp.com",
  projectId: "clothingshop-b6fb9",
  storageBucket: "clothingshop-b6fb9.appspot.com",
  messagingSenderId: "438862994973",
  appId: "1:438862994973:web:91943ca8e3bf8fd152b0f4"
};

const app = initializeApp(firebaseConfig);

// After initializing an app, we initialize a provider in this case it is google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account",
})

// next we use the popup function to call the authentication function of firebase and the
// google provider
export const auth = getAuth();
export const SignInWithGoogleAuth = () => signInWithPopup(auth, provider);


// Lets start by making a collection and storing all of our users in the storage
const db = getFirestore(app);

export const createUserDocument = async (userAuth) => {
  const userDocumentRef = doc(db, 'users', userAuth.uid);

  console.log(userDocumentRef);

  const getUserRef = await getDoc(userDocumentRef);
  console.log(getUserRef);
  console.log(getUserRef.exists());

  if(!getUserRef.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, {displayName, email, createdAt});
    }catch (err){
      console.log(err);
    }
  }
}