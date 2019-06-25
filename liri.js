require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api")

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

// -------------------------Log User Input -------------------------
nodeArgs = process.argv;
// console.log(nodeArgs);

userInput = process.argv.slice(3).join(" ");
// console.log(userInput);

action = process.argv[2];



// Liri necessary commands
switch (action) {
    case "concert-this":
    // should look like: node liri.js concert-this '<artist name here>'
    // needs to search the bands-in-town api and produce venue name, location, and date of the event

        concertThis();
        break;
    case "movie-this":
    // movie-this
    // Should use ombd api key and the use of the axios package to retrieve the data
    // should look like: node liri.js movie-this '<movie name here>'
    // default movie should be Mr. Nobody
        movieThis();
        break;
    case "spotify-this-song":
    // default shoulde be "The Sign" by Ace of Base
        spotifyThis();
        break;
    case "do-what-it-says":
    // do-what-it-says
    // using the fs node package take the text inside of random.txt and use it to call one of liri's commands
        doWhatItSays();
        break;

    default:
        break;
}

// BONUS:
        // Output the data to a .txt file called log.txt
        // Append each command that is run into the log.txt file.
        // Do not overwrite log.txt with each new command


// NOTE
    // REMEMBER TO USE THE console.log(JSON.stringify(response, null, 2)



// -----------------------------Functions---------------------------
function concertThis() {
    if (userInput) {
        axios
        .get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=43b95e20-19ca-4d56-aa41-9b9e1845fde2")
        .then(function(response) {
            
            let venueName = response.data[0].venue.name;
            let venueCity = response.data[0].venue.city;
            let date = response.data[0].datetime;
            let nicerDate = moment(date).format("LLLL");

            console.log("\n" + userInput + " is playing in " + venueCity + ", \nat the venue called " + venueName + ",\non " + nicerDate + ".")

        })
        .catch(function(error) {
            console.log(error);
        })
    

    } else if (userInput == "") {
        console.log("\nPlease enter an artist in order to search their upcoming events");
    }
};

function movieThis() {
    if (userInput) {
        axios
        .get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            let title = response.data.Title;
            let year = response.data.Year;
            let rated = response.data.Rated;
            let genre = response.data.Genre;
            let rating = response.data.Ratings[1].Value;

            console.log("\nMovie Title: " + JSON.stringify(title, null, 2));
            console.log("\nRelease Year: " + JSON.stringify(year, null, 2));
            console.log("\nMovie Rating: " + JSON.stringify(rated, null, 2));
            console.log("\nMovie Genre: " + JSON.stringify(genre, null, 2));
            console.log("\nRotten Tomatoes Score: " + JSON.stringify(rating, null, 2));
        })
        .catch(function(error){
            if (error) {
                throw error;
            }
        })
    } else if (userInput == "") {
        let potato = "Mr+Nobody";
        axios
        .get("http://www.omdbapi.com/?t=" + potato + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            let title = response.data.Title;
            let year = response.data.Year;
            let rated = response.data.Rated;
            let genre = response.data.Genre;
            let rating = response.data.Ratings[1].Value;

            console.log("\nMovie Title: " + JSON.stringify(title, null, 2));
            console.log("\nRelease Year: " + JSON.stringify(year, null, 2));
            console.log("\nMovie Rating: " + JSON.stringify(rated, null, 2));
            console.log("\nMovie Genre: " + JSON.stringify(genre, null, 2));
            console.log("\nRotten Tomatoes Score: " + JSON.stringify(rating, null, 2));
        })
        .catch(function(error){
            if (error) {
                throw error;
            }
        })
    }

    
};

function spotifyThis() {

    // setting conditional to check for null input
    if (userInput) {
        spotify
    .search({ type: 'track', query: userInput, limit: 1})
    .then(function(response) {

        let artist = response.tracks.items[0].artists[0].name;

        let albumName = response.tracks.items[0].album.name;

        let previewTrack = response.tracks.items[0].preview_url;

        let trackName = response.tracks.items[0].name;

        console.log("\nArtist: " + JSON.stringify(artist, null, 2));
        console.log("\nTrack Name: " + JSON.stringify(trackName, null, 2));
        console.log("\n30 Second Song Preview: " + JSON.stringify(previewTrack, null, 2));
        console.log("\nAlbum Name: " + JSON.stringify(albumName, null, 2));
    })
    .catch(function(err) {
        console.log(err);
    })
    } else if (userInput === "") {
        spotify
    .search({ type: 'track', query: "The Sign: Ace of Base", limit: 1})
    .then(function(response) {

        let artist = response.tracks.items[0].artists[0].name;

        let albumName = response.tracks.items[0].album.name;

        let previewTrack = response.tracks.items[0].preview_url;

        let trackName = response.tracks.items[0].name;

        console.log("\nArtist: " + JSON.stringify(artist, null, 2));
        console.log("\nTrack Name: " + JSON.stringify(trackName, null, 2));
        console.log("\n30 Second Song Preview: " + JSON.stringify(previewTrack, null, 2));
        console.log("\nAlbum Name: " + JSON.stringify(albumName, null, 2));
    })
    .catch(function(err) {
        console.log(err);
    })
    }
    
};

function doWhatItSays() {};