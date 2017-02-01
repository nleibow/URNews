var app = angular.module("ngNews", ["checklist-model"]);

app.controller("ChoiceController", function($scope, $http){
	$scope.roles = [
    {id: 'associated-press', text: 'Associated Press'},
    {id: 'bild', text: 'Bild'},
    {id: 'bbc-news', text: 'BBC News'},
    {id: 'bbc-sports', text: 'BBC Sports'},
    {id: 'bloomberg', text: 'Bloomberg'},
    {id: 'business-insider', text: 'Business Insider'},
    {id: 'buzzfeed', text: 'Buzzfeed'},
    {id: 'cnbc', text: 'CNBC'},
    {id: 'cnn', text: 'CNN'},
    {id: 'daily-mail', text: 'Daily Mail'},
    {id: 'engadget', text: 'Engadget'},
    {id: 'entertainment-weekly', text: 'Entertainment Weekly'},
    {id: 'espn', text: 'ESPN'},
    {id: 'financial-times', text: 'Financial Times'},
    {id: 'focus', text: 'Focus'},
    {id: 'fortune', text: 'Fortune'},
    {id: 'fox-sports', text: 'Fox Sports'},
    {id: 'google-news', text: 'Google News'},
    {id: 'hacker-news', text: 'Hacker News'},
    {id: 'ign', text: 'IGN'},
    {id: 'independent', text: 'Independent'},
    {id: 'mashable', text: 'Mashable'},
    {id: 'metro', text: 'Metro'},
    {id: 'mirror', text: 'Mirror'},
    {id: 'national-geographic', text: 'National Geographic'},
    {id: 'new-scientist', text: 'New Scientist'},
    {id: 'newsweek', text: 'Newsweek'},
    {id: 'new-york-magazine', text: 'New York Magazine'},
    {id: 'nfl-news', text: 'NFL News'},
    {id: 'polygon', text: 'Polygon'},
    {id: 'reuters', text: 'Reuters'},
    {id: 'sky-news', text: 'Sky News'},
    {id: 'sky-sports-news', text: 'Sky Sports News'},
    {id: 'spiegel-online', text: 'Spiegal Online'},
    {id: 't3n', text: 'T3n'},
    {id: 'techcrunch', text: 'TechCrunch'},
    {id: 'the-economist', text: 'The Economist'},
    {id: 'the-hindu', text: 'The Hindu'},
    {id: 'the-huffington-post', text: 'The Huffington Post'},
    {id: 'the-new-york-times', text: 'The New York Times'},
    {id: 'the-next-web', text: 'The Next Web'},
    {id: 'the-sports-bible', text: 'The Sports Bible'},
    {id: 'the-telegraph', text: 'The Telegraph'},
    {id: 'the-times-of-india', text: 'The Times Of India'},
    {id: 'the-verge', text: 'The Verge'},
    {id: 'the-wall-street-journal', text: 'The Wall Street Journal'},
    {id: 'the-washington-post', text: 'The Washington Post'},
    {id: 'time', text: 'Time'},
    {id: 'usa-today', text: 'USA Today'},
    {id: 'wired-de', text: 'Wired.de'},
    {id: 'wirschafts-woche', text: 'Wirschafts Woche'}
    
  ];
  $scope.user = {
    roles: []

  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
     console.log($scope.user.roles);
  };
  console.log($scope.user.roles);
  $scope.submit = function(){
  $http.post('/news', $scope.user.roles).then(function(res){
  	$scope.sources = {}
  	$scope.news = []
  	$scope.user.roles = []
  	console.log($scope.user.roles)
  	console.log(res.data)
  	var frontNewsReturned = res.data;
  	// console.log(frontNewsReturned[0].articles.length)
  	for (var i = 0; i < frontNewsReturned.length; i++) {
  		console.log(frontNewsReturned[i].source)
  		// console.log(frontNewsReturned[i].articles)
  		// console.log(frontNewsReturned[i].articles[i].length)
  		var source = frontNewsReturned[i].source;
  		// var emptyObj = {}
  		// emptyObj[source] = []
  		$scope.sources[source] = []
  		for (var j = 0; j < frontNewsReturned[i].articles.length; j++) {
  			$scope.sources[source].push(frontNewsReturned[i].articles[j])

  		}
  		console.log($scope.sources[source]);

  		

  		// $scope.news.push(frontNewsReturned[i].articles[i])
  		console.log($scope.sources)
  	}

		
  })
 //  ;$http({
	// 	method: 'GET',
	// 	url: '/news'
	// })
 //  .then(function(res){
	// 	console.log(res);
	// 	var frontNewsReturned = res.data;
	// 	$scope.news = frontNewsReturned;

	// });

  // localStorage.setItem('Choices',$scope.user.roles);
};});
/***********************This NewsController grabs the news articles from the back-end****************/
app.controller("NewsController", function($scope, $http){
	

	/**********This is me trying to use localstorage node package START*******************/
	// var frontNewsReturned = localStorage.getItem('Articles');
	// console.log(frontNewsReturned);
	/**********This is me trying to use localstorage node package END*******************/
});



