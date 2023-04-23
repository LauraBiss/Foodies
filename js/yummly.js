const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "0f81472861msh6c30e712b93a277p196581jsn597caed2b9c3",
		"X-RapidAPI-Host": "yummly2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});