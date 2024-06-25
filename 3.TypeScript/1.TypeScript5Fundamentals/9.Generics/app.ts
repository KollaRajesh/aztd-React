//tsc -init // create default configuration

import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";

let docs: Array<Documentary> = [
  new Documentary('The Act of Killing', 2012, 'History'),
  new Documentary('American Factory', 2019, 'Society'),
  new Documentary('Amy', 2015, 'Biography'),
  new Documentary('Blackfish', 2013, 'Nature'),
  new Documentary('Bowling for Columbine', 2002, 'Politics'),
  new Documentary('The Central Park Five', 2012, 'Crime'),
  new Documentary('Citizenfour', 2014, 'Politics'),
  new Documentary('The Cove', 2009, 'Nature'),
  new Documentary('Faces Places', 2017, 'Art'),
  new Documentary('Fahrenheit 9/11', 2004, 'Politics'),
  new Documentary('Free Solo', 2018, 'Nature'),
  new Documentary('Grizzly Man', 2005, 'Nature'),
  new Documentary('Hoop Dreams', 1994, 'Sports'),
  new Documentary('Icarus', 2017, 'Sports'),
  new Documentary('Jiro Dreams of Sushi', 2011, 'Food'),
  new Documentary('Man on Wire', 2008, 'History'),
  new Documentary('March of the Penguins', 2005, 'Nature'),
  new Documentary('My Octopus Teacher', 2020, 'Nature'),
  new Documentary('Won\'t You Be My Neighbor?', 2018, 'Biography'),
  new Documentary('Woodstock', 1970, 'Music'),
  new Documentary('Baseball', 1994, 'History'),
  new Documentary('In Pursuit of Flavor', 2022, 'Wine'),
  new Documentary('Gumbo', 2018, 'Food'),
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favoriteDocs.add(doc));

let firstDoc: Documentary = favoriteDocs.getFirst();

favoriteDocs.printTitles();
firstDoc.printItem();



let inventory: Array<Movie> = Utility.GetAllMovies();

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFave: Movie = favoriteMovies.getFirst();
console.log(`${firstFave.title} - ${firstFave.yearReleased}`);

let originalMovie = favoriteMovies.find('The Great Hack');
console.log(originalMovie);
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);