/* global firebase */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxIkZLMnxhJ6hHeQHjFBjoRDOzA4r4K6Y",
    authDomain: "aman-blog.firebaseapp.com",
    databaseURL: "https://aman-blog.firebaseio.com",
    storageBucket: "aman-blog.appspot.com",
    messagingSenderId: "166604899960"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
