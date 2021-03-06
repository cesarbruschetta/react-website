/*
    UPDATE NEW IN FIREBASE API
*/

let Parser = require('rss-parser');
let firebase = require("firebase-admin");
let slugify = require('slugify');
let md5 = require('md5');
let loremIpsum = require('lorem-ipsum');
 

var serviceAccount = require("./serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://site-api-news.firebaseio.com"
});
 
// Set Data
var db = firebase.database();
let parser = new Parser();

var rss = [
    "http://rss.home.uol.com.br/index.xml",
    "https://noticias.r7.com/feed.xml",
    "https://noticias.r7.com/sao-paulo/feed.xml",
    "http://pox.globo.com/rss/g1/brasil/",
    "http://pox.globo.com/rss/g1/rio-de-janeiro/",
    "http://pox.globo.com/rss/g1/sao-paulo/"
]
for(var i = 0; i < rss.length;i++){

    console.log("processando rss: ",rss[i]);
    parser.parseURL(rss[i], function(error, data_rss) {
        if(error){
            console.log(error);
            return
        }

        var categorie_rss = slugify(data_rss.title),
            categorie_uid = md5(categorie_rss);  

        var data = {
            "description": data_rss.description || categorie_rss,
            "title": data_rss.title,
            "uid": categorie_uid,
            "slug": categorie_rss,
        }

        for (var n = 0; n < data_rss.items.length; n++){
            var obj_news = data_rss.items[n];
            
            obj_news["contentSnippet"] = loremIpsum({
                count: 100,     // Number of words, sentences, or paragraphs to generate.
                units: 'words'  // Generate words, sentences, or paragraphs.
            });
            obj_news["uid"] = md5(obj_news.title);
            obj_news["categorieUID"] = categorie_uid;
            obj_news["categorieTitle"] = data_rss.title;

            data[obj_news["uid"]] = obj_news;
        
            // Write the new post's
            var updates = {};
            updates['/news/' + obj_news["uid"]] = obj_news;
            db.ref("/").update(updates);
        };
    
        db.ref("/categorie/"+categorie_uid).update(data);
    
    });
};

setTimeout((function() {  
    return process.exit(0);
}), 3000);
