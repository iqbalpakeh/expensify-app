import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDksOWUm-iKOXNxMOQd_IL5rQZm4Uj_4lo",
	authDomain: "expensify-app-ec7bb.firebaseapp.com",
	databaseURL: "https://expensify-app-ec7bb.firebaseio.com",
	projectId: "expensify-app-ec7bb",
	storageBucket: "",
	messagingSenderId: "490139563764",
	appId: "1:490139563764:web:0743900e03417900"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
