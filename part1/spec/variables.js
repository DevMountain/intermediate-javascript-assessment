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

var emails = [
	"awilliams0@intel.com",
	"vbailey1@freewebs.com",
	"tpeters2@yelp.com",
	"thunter3@sourceforge.net",
	"ldixon4@ask.com",
	"rgordon5@adobe.com",
	"lcampbell6@msu.edu",
	"barmstrong7@hugedomains.com",
	"jmorgan8@desdev.cn",
	"shamilton9@oracle.com"
];

// Fake $http for promise tests
var $http = function(request) {
	var defered = $q.defer();

	if (request.url !== '/api/users' || request.method !== "GET") {
		defered.resolve('request Failed');
	}

	setTimeout(function() {
		defered.resolve({data: users});
	}, 1000);

	return defered.promise;
};
$http.get = function(url) {
	var defered = $q.defer();

	if (url !== '/api/users') {
		defered.resolve('request Failed');
	}

	setTimeout(function() {
		defered.resolve({data: users});
	}, 0);

	return defered.promise;
};

// Binding function and object for binding problems
var bindObjectArray = [{
	id: 1,
	name: 'Unicorn',
	ability: 'Sparkles',
	favorites: ['Waffles', 'Butterflys']
}, {
	id: 2,
	name: 'Dragon',
	ability: 'Fire',
	favorites: ['Burninating', 'Red Meat']
}];

var binding = {
	call: function(name) {
		this.name = name;
		return this;
	},
	apply: function() {
		for (var i = 0; i < arguments.length; i++) {
			this.favorites.push(arguments[i]);
		}
		return this;
	}
}
