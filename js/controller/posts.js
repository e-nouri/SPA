//controller for Posts
app.controller('postsController', function ($scope, postFactory){
	
	$scope.loading = true;
	$scope.posts = postFactory.getPosts().then(function(posts){

		//promise kept
		$scope.posts = posts;
		$scope.loading = false;

	}, function(msg){

		//promise broken
		alert(msg);
	})

});