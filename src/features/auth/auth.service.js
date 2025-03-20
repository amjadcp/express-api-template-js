import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../configs/firebase.config.js";

export const createAccount = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  // TODO: Implement logic to store user in database
  // TODO: Send welcome email if the user is created successfully

  return {
    token: user?.accessToken,
    user: {
      uid: user?.uid,
      email: user?.email,
    },
  };
};

export const firebaseLogin = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return {
    token: user?.accessToken,
    user: {
      uid: user?.uid,
      email: user?.email,
    },
  };
};
