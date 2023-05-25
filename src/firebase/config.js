import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_CONFIG_API_KEY,
  authDomain: process.env.REACT_APP_CONFIG_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CONFIG_PROJECT_ID,
  storageBucket: process.env.REACT_APP_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_CONFIG_APP_ID,
  // pour firebase analytics
  measurementId: process.env.REACT_APP_CONFIG_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);