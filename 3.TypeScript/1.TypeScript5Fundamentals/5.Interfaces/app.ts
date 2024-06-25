//tsc -init // create default configuration

interface Movie { 
    title: string;
    director: string;
    yearReleased: Number;
    streaming: string;
 
}
interface ReviewLogger{
(review: string) : void;
}
interface LogMovie extends Movie{ 
    logReview: ReviewLogger;
}
interface Person { 
    name: string;
    email: String
}

interface Director extends Person { 
    numMoviesDirected: number;
}
interface CastMember extends Person{
    role: string;
    rehearse: (sceneNumber: number) => void;
}

class Performer implements CastMember{
    name: string = "";
    email: string = "";
    role: string = "";
    rehearse(sceneNumber: number):void {
        
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}`);
    }
}

function GetAllMovies():Movie[]{
  return [
          {title: "The French Dispatch",    director: "Wes Anderson",yearReleased: 2021,    streaming: "Disney+"},
          {title: "The Power of the Dog",director: "Jane Campion", yearReleased: 2021, streaming: "Netflix" },
          {title: "Dune",  director: "Denis Villeneuve", yearReleased: 2021,streaming: "HBO Max"},
          {title: "The Lost Daughter",director: "Maggie Gyllenhaal",yearReleased: 2021,  streaming: "Netflix"},
          {title: "The Tragedy of Macbeth", director: "Joel Coen", yearReleased: 2021, streaming: "Apple TV+"},
          {title: "The Last Duel", director: "Ridley Scott",yearReleased: 2021, streaming: "Hulu" },
          {title: "The Humans", director: "Stephen Karam", yearReleased: 2021, streaming: "Showtime" },
          {title: "The Velvet Underground",director: "Todd Haynes",yearReleased: 2021, streaming: "Apple TV+"},
          {title: "The Souvenir Part II",director: "Joanna Hogg", yearReleased: 2021, streaming: "Amazon Prime Video"},
          {title: "The Green Knight",  director: "David Lowery",yearReleased: 2021,streaming: "Amazon Prime Video" }
        ];
}


function PrintMovieInfo(movie:Movie):void{
 
 console.log(`Title:${movie.title}`);
 console.log(`Year Released: ${movie.yearReleased}`);
 console.log(`Director: ${movie.director}`);

}
//usage

let myMovie = {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video", 
    genre: 'Sci-fi',
    previouslyViewed:true
}
PrintMovieInfo(myMovie);
/* mymovie is having additional properties (genre,previouslyViewed) .   
   those are not exists in movie type.function will accept mymovie as movie type because all propeties of movies are in mymovie.
   this is called duck type.*/

let otherMovie : Movie=  {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video"
}
PrintMovieInfo(myMovie);

let anotherMovie : LogMovie=  {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video", 
    logReview:(review:string)=> console.log(`Review:${ review }`)
}
PrintMovieInfo(anotherMovie);
if (anotherMovie.logReview) {
    anotherMovie.logReview('Great Drama');    
}

let printReview: ReviewLogger;
printReview = (review: string) => console.log(`viewer review: ${review}`);

printReview('I want to see it again');

let favoriteCastMember: CastMember = new Performer();
favoriteCastMember.name = 'Daisy';
favoriteCastMember.rehearse(25);
