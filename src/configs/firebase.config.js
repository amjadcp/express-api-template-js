import firebaseAdmin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import envConfig from "./env.config.js";

let auth;
try {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(envConfig.firebaseCredentials),
  });

  const firebaseApp = initializeApp(envConfig.firebaseConfig);

  auth = getAuth(firebaseApp);
} catch (error) {
  console.error(error);
}

export { auth };
export default firebaseAdmin;
