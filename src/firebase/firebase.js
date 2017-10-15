import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyAqmou_ud7BIy6lZlaeTKIAVlxZ36KHjsY',
    authDomain: 'expensify-63e66.firebaseapp.com',
    databaseURL: 'https://expensify-63e66.firebaseio.com',
    projectId: 'expensify-63e66',
    storageBucket: 'expensify-63e66.appspot.com',
    messagingSenderId: '165764318200',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//database.ref('expenses').on('child_removed', snapshot => {
//    console.log('snapshot', snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_changed', snapshot => {
//    console.log('snapshot', snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_added', snapshot => {
//    console.log('snapshot', snapshot.key, snapshot.val());
//});

//const childSnapshotToObject = (childSnapshot) => {
//    return { id: childSnapshot.key, ...childSnapshot.val() };
//};

//database.ref('expenses').on('value', snapshot => {
//    const expenses = [];
//
//    snapshot.forEach(childSnapshot => {
//        expenses.push(childSnapshotToObject(childSnapshot));
//    });
//});

//database.ref('expenses').push({
//    description: 'Buy a ssd disk',
//    note: 'This is a ssd disk to improve mac mini performance',
//    amount: 25300,
//    createdAt: moment().valueOf()
//});
//
//database.ref('expenses').push({
//    description: 'Buy a headphones',
//    note: 'New headphones to improve audio quality for videos',
//    amount: 5300,
//    createdAt: moment().valueOf()
//});
//
//database.ref('expenses').push({
//    description: 'Buy a chair',
//    note: 'The current chair is not argonomic at all. I need a new one to take care of my back!',
//    amount: 15300,
//    createdAt: moment().valueOf()
//});

//database.ref('notes').push({
//    title: 'First note',
//    body: 'This is my note',
//});

//database.ref('notes').set(notes);
