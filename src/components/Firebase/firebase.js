import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIUTyRwq2alPfSTIIobo4GYh1fmxTkoAw',
  authDomain: 'nike-e-commerce-df174.firebaseapp.com',
  projectId: 'nike-e-commerce-df174',
  storageBucket: 'nike-e-commerce-df174.appspot.com',
  messagingSenderId: '441813865713',
  appId: '1:441813865713:web:6d0337a23e759b50b04550',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
