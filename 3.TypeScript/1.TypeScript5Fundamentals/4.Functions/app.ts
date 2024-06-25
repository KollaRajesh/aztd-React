//tsc -init // create default configuration

function GetAllMovies(){

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
function GetTitles(director:string): string[];
function GetTitles(director:string,streaming:string): string[];
function GetTitles(director:string,streaming?:string): string[]{
 const allMovies=GetAllMovies();

 const searchResults:string[]=[];

 if (typeof streaming !==undefined)
 {
    for (let movie of allMovies)
    {
      if (movie.director ===director && movie.streaming ===streaming)
      {
        searchResults.push(movie.title);

      } 
    }
 }
 else 
 {
    for (let movie of allMovies)
    {
        if (movie.director ===director )
        {
          searchResults.push(movie.title);
        } 
    }
 }
 return searchResults;
}

function  CreateMovieID(name:string,id:number):string{

    return name + id;
}

//usage
let movies:string[] =GetTitles('Jane Campion','Netflix');

movies.forEach(title => console.log(title));


let x: number;
let newID: string = CreateMovieID('Jettle', 10);
console.log(newID);

let IDGenerator: (chars: string, nums: number) => string


IDGenerator = CreateMovieID;

let newID2: string = IDGenerator('Jettle', 15);
console.log(newID2);

IDGenerator = (name: string, id: number) => name + id;
let newID3: string = IDGenerator('Jettle', 20);
console.log(newID3);
