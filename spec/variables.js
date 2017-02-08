var $q = Q;

var users = [{
		"id": 1,
		"first_name": "Alan",
		"last_name": "Williams",
		"email": "awilliams0@intel.com",
		"gender": "Male"
    },
	{
		"id": 2,
		"first_name": "Victor",
		"last_name": "Bailey",
		"email": "vbailey1@freewebs.com",
		"gender": "Male"
    },
	{
		"id": 3,
		"first_name": "Theresa",
		"last_name": "Peters",
		"email": "tpeters2@yelp.com",
		"gender": "Female"
    },
	{
		"id": 4,
		"first_name": "Theresa",
		"last_name": "Hunter",
		"email": "thunter3@sourceforge.net",
		"gender": "Female"
    },
	{
		"id": 5,
		"first_name": "Laura",
		"last_name": "Dixon",
		"email": "ldixon4@ask.com",
		"gender": "Female"
    },
	{
		"id": 6,
		"first_name": "Rachel",
		"last_name": "Gordon",
		"email": "rgordon5@adobe.com",
		"gender": "Female"
    },
	{
		"id": 7,
		"first_name": "Louis",
		"last_name": "Campbell",
		"email": "lcampbell6@msu.edu",
		"gender": "Male"
    },
	{
		"id": 8,
		"first_name": "Brandon",
		"last_name": "Armstrong",
		"email": "barmstrong7@hugedomains.com",
		"gender": "Male"
    },
	{
		"id": 9,
		"first_name": "Janice",
		"last_name": "Morgan",
		"email": "jmorgan8@desdev.cn",
		"gender": "Female"
    },
	{
		"id": 10,
		"first_name": "Samuel",
		"last_name": "Hamilton",
		"email": "shamilton9@oracle.com",
		"gender": "Male"
    }
];


var $http = function(obj) {
	var defered = $q.defer();

	setTimeout(function() {
		defered.resolve(users);
	}, 1000);

	return defered.promise;
};
$http.get = $http;
