var express = require('express');
var app = express();
var	bodyParser = require('body-parser');
var request = require('request');
let NewsAPI = require('newsapi');


// localStorage.setItem('myKey', myValue);
// myValue = localStorage.getItem('myKey');

// // use JSON to stringify / parse when using strict w3c compliance
// sessionStorage.setItem('myKey', JSON.stringify(myValue));
// myValue = JSON.parse(localStorage.getItem('myKey'));


// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
/*********************** Served up directories ******************************/
app.use(express.static(__dirname + '/public'));
app.set('views', '/views');

var sourcesFinal = []
/************************ Making call to API *******************************/
//GETTING THE SELECTION FROM THE FRONT END
app.post('/news', function(req, res){
  var returnedSources = req.body;
for (var i = 0; i < returnedSources.length; i++) {
  sourcesFinal.push(returnedSources[i])
}
   
//USING THE INFO FROM USER SELECTION, RETURNING ARTICLES

let apiKey = 'd920cffb63d94701833b40916fd6ee26';
let newsapi = new NewsAPI(apiKey);
console.log(sourcesFinal);
// Used to query articles
for (let i = 0; i < sourcesFinal.length; i++) {
  var fullArticles = []

newsapi.articles({
  source: sourcesFinal[i], // required 
  // sortBy: 'top' // optional 
}).then(articlesResponse => {
  console.log(articlesResponse);
   var newsReturned = articlesResponse;
   fullArticles.push(articlesResponse)
   console.log(newsReturned + 'it is hitting this line with the article');
   console.log(fullArticles)
   console.log(i)
   if ( fullArticles.length == sourcesFinal.length){
    console.log('it ran')
    res.json(fullArticles)
    

   }
   

   //ATTEMPT FOUR
//    request.post(
//     'http://localhost:3000/api',
//     { json: newsReturned },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// );
   //ATTEMPT THREE
//    request.post({url:'http://localhost:3000/api', newsReturned}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
// });
   //ATTEMPT TWO
 //   request({
 //  method: "PUT",
 //  url: /api,
 //  json: newsReturned
 // });
 //ATTEMPT ONE
   // app.get('/api', function(req, res){
   //    res.send(newsReturned);
   // });
   
});}});





/************************ Serving up the index.html file in views for angular *******************************/
app.use(express.static('public'));
app.get(['/'], function(req, res) { // one page app -- angular appends to index.html using ui-view
   res.sendFile(__dirname + '/public/views/index.html');
});

/*********************** SERVER ******************************/
app.listen(process.env.PORT || 3000, function() {
   console.log('BOOM, Express is firing on all cylinders');
});

module.exports = app; //for testing
