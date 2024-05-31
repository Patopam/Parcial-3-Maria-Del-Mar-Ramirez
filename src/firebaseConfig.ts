const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs, query, orderBy } = require('firebase/firestore');
import { AddCards } from './types/store';

const firebaseConfig = {
  apiKey: "AIzaSyCoy9DLhQmklZ2WrbNvpODhdlOIgYFJNHE",
  authDomain: "mariagod-73350.firebaseapp.com",
  projectId: "mariagod-73350",
  storageBucket: "mariagod-73350.appspot.com",
  messagingSenderId: "582678897491",
  appId: "1:582678897491:web:df75c2017ae8267436f7a6",
  measurementId: "G-TFVQW4XC55"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const add = async (FormData: Omit<AddCards, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'data'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const geti = async () => {
	const querySnapshot = await getDocs(query(collection(db, 'data'), orderBy('pTitle', 'desc')));
	const Array: Array<AddCards> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Array.push({ id: doc.id, ...data });
	});
	console.log('geti', Array);
	return Array;
};