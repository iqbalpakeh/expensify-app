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

// -----------------------------------------------------------------
// READ DATA
// -----------------------------------------------------------------

const onValueChange = database.ref().on(
	"value",
	snapshot => {
		console.log(snapshot.val());
	},
	e => {
		console.log("Error with data fetching", e);
	}
);

setTimeout(() => {
	database.ref("age").set(29);
}, 3500);

setTimeout(() => {
	database.ref().off("value", onValueChange);
}, 7000);

setTimeout(() => {
	database.ref("age").set(30);
}, 10500);

// database
// 	.ref("location/city")
// 	.once("value")
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(e => {
// 		console.log("Error", e);
// 	});

// -----------------------------------------------------------------
// CREATE DATA
// -----------------------------------------------------------------

// database
// 	.ref()
// 	.set({
// 		name: "Iqbal Pakeh",
// 		age: 34,
// 		stressLevel: 6,
// 		job: {
// 			title: "Software developer",
// 			company: "Google"
// 		},
// 		location: {
// 			city: "Singapore",
// 			state: "Singapore"
// 		}
// 	})
// 	.then(() => {
// 		console.log("Data is saved!");
// 	})
// 	.catch(error => {
// 		console.log("This failed", error);
// 	});

// -----------------------------------------------------------------
// UPDATE DATA
// -----------------------------------------------------------------

// database
// 	.ref()
// 	.update({
// 		stressLevel: 9,
// 		"job/company": "Amazon",
// 		"location/city": "Seattle"
// 	})
// 	.then(() => {
// 		console.log("Data is updated!");
// 	})
// 	.catch(e => {
// 		console.log("This failed", error);
// 	});

// -----------------------------------------------------------------
// REMOVE DATA
// -----------------------------------------------------------------

// database
// 	.ref("isSingle")
// 	.remove()
// 	.then(() => {
// 		console.log("Data is removed!");
// 	})
// 	.catch(e => {
// 		console.log("Error: ", e);
// 	});
