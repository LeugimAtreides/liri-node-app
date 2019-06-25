# liri-node-app
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies

Functionality is as follows:

When called upon, liri will take in one of four commands: concert-this, movie-this, do-what-it-says, and spotify-this-song. Each time a function gets called another function called appendCommand logs it to the log.txt file.
<br><br>

LIRI Concert This:
<br>
<img src="images/concert-this-example.gif" alt="concert-this functionality">
<br><br>
As seen on the .gif above, the terminal takes in the command "concert-this" and the user input string to determine where an artist is playing their next show.
<br><br>

LIRI Movie This:
<br>
<img src="images/movie-this-example.gif" alt="movie-this functionality">
<br><br>
As seen on the .gif above, the terminal takes in the command "movie-this" and the user input string to obtain data from OMDB. It then displays the results neatly.
<br><br>

LIRI Spotify This Song:
<br>
<img src="images/spotify-this-song-example.gif" alt="spotify-this-song functionality">
<br><br>
As seen on the .gif above, the terminal takes in the command "spotify-this-song" and returns a neat console.log that displays information about the song.
<br><br>

LIRI Do What It Says:
<br>
<img src="images/do-what-it-says-example.gif" alt="do-what-it-says functionality">
<br><br>
In this .gif the terminal command will read the file "random.txt" and take in the data from that file. The data will be split into an array that will allow the first part of the array to be read as the function, and which will then allow the second part to be read as the input string.
<br><br>

BONUS:

Append Command:
<br>
<img src="images/append-command-example.gif" alt="append-command example">
<br><br>
In this .gif I demonstrate how the function appendCommand appends the file log.txt to include all of the commands that have been run so far.