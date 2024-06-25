//tsc -init // create default configuration

function GetReview(title: string): string | number
{
    if (title == 'aqua man') { return 'avengers movie'; }
    else { return Math.floor(Math.random() * 10); }
}

let Title: string = 'spider man';
let review: string | number = GetReview(Title);

console.log(`Movie title: ${Title}`);
if (typeof (review) == 'string') {
    console.log(`review:${review}`);
}
else { 
    console.log(`rating:${review}/10 `);
}