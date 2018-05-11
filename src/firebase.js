import firebase from 'firebase'

var config = { 
    apiKey: "AIzaSyCHTyRromC_-Pnj4ArXXuQHiQbuOTBAxcI",
    authDomain: "site-api-news.firebaseapp.com",
    databaseURL: "https://site-api-news.firebaseio.com",
    projectId: "site-api-news",
    storageBucket: "site-api-news.appspot.com",
    messagingSenderId: "173781666193"    
};

var fire = firebase.initializeApp(config);

export default fire;