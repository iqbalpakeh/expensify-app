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

database.ref().set({
	name: "Iqbal Pakeh",
	age: 34,
	isSingle: false,
	location: {
		city: "Singapore",
		state: "Singapore"
	}
});

database.ref("age").set(27);
database.ref("location/city").set("Batam");

database.ref("attributes").set({
	height: 168,
	weight: 74
});
