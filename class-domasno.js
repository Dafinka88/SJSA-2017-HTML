class Movie {
	constructor(name, actors, genres, year, boxOfficeRunValue){
		this.name = name;
		this.actors = actors;
		this.genres = genres;
		this.year = year;
		this.boxOfficeRunValue = boxOfficeRunValue;
	}

	BoxOfficeRun(){
		console.log("Worldwide Gross Box Office Run for " + this.name + " is $" + parseFloat(this.boxOfficeRunValue).toLocaleString());
	}
}

var movieJusticeLeaque = new Movie("Justice Leaque",
	["Ben Affleck", "Henry Cavill", "Amy Adams", "Gal Gadot", "Jason Momoa", "Ray Fisher", "Ezra Miller"],
	["Action", "Adventure", "Fantasy"], 2017, 614,729,668);
movieJusticeLeaque.BoxOfficeRun();