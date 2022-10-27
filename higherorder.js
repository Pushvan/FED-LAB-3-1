
var users = [
	{"user": "krishna"},
	{"user": "vijay"},
	{"user": "vasu"},
	{"user": "venu"},
	{"user": "rajesh"},
	{"user": "varun"},
	{"user": "chandra"}
	];

let resultDetails = users.map(user => {
    let mark = Math.random() * 100;
    user.mark = mark;
    return user
});


var selectedCandidate = resultDetails.filter(user => {
	if(user.mark > 80){
		return user;
    }
});
let candidate=[];
selectedCandidate.forEach(ele=>{candidate.push(ele.user)})
console.log(candidate);

const users2 = [
	{
	  name: "David John",
	  city: "London",
	  birthYear: 1998
	},
	{
	  name: "Justin",
	  city: "Canada",
	  birthYear: null
	},
	{
	  name: "Yusuf Shea",
	  city: "Paris",
	  birthYear: 1990
	},
	{
	  name: "Zerovsky",
	  city: "Russia",
	  birthYear: 2002,
	}
  ];
  
  const currentYear = new Date().getFullYear();
  
  const userNames = users2.reduce((filterUsers, user) => {
	if (user.birthYear && (currentYear - user.birthYear) > 25) {
	  filterUsers.push(user.name);
	}
	return filterUsers;
  }, []);
  
  console.log(userNames);
