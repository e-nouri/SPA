/*
used too many promises just to practice
in case of a production app, sending the 
$http.get with promise, is better then 
making promises each time we call get
*/

//app Factory for holding the data model
app.factory('postFactory', function ($http, $q, $timeout){

	var  factory = {

		posts : false,

		getPosts : function(){

			var deferred = $q.defer();

			//avoiding the http.get request each time 
			//we call the getPosts funtion

			if (factory.posts !== false){
				deferred.resolve(factory.posts);

			}else{

				$http.get('posts.json')
				.success(function(data, status){
					factory.posts = data

					//to show the loading !
					$timeout(function(){
						deferred.resolve(factory.posts)
					}, 2000);
					
				})
				.error(function(data, status){
					deferred.error('Cant get the posts !')
				})

			};	

			return deferred.promise;
		},

		getPost : function(id){

			//promise
			var deferred = $q.defer();

			var post = {};
			var posts = factory.getPosts().then(function(posts){
				post = factory.posts[id];

				//send the post if promise kept
				deferred.resolve(post);

			}, function(msg){
				deferred.reject(msg);
			})
			
			return deferred.promise;
		},

	};
	return factory;

});
