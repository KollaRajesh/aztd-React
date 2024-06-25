//tsc -init // create default configuration
import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary } from "./classes";
import * as Utility from "./functions";

let allMovies: Movie[] = Utility.GetAllMovies();
allMovies.forEach(movie => {
    Utility.PrintMovieInfo(movie);
});