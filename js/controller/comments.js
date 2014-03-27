//controller for Comments
app.controller('commentsController', function ($scope, postFactory, $routeParams){
	
	$scope.loading = true;
	post = postFactory.getPost($routeParams.id).then(function(post){

		//promise kept, get the post's comments
		$scope.comments = post.comments
		$scope.title = post.name
		$scope.loading = false;

	}, function(msg){

		//promise broken
		alert(msg);
	})
	

});