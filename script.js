/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];


/* # Step 1: Implementing `chooseRandomGenre()`

This function needs to randomly return either "drama", "fantasy", or "comedy". The general approach should be to generate a random number that is either 0, 1, or 2. Then you can make a code path for each of these three possibilities using a conditional statement. Finally, return a different value in each of the three code paths. */

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
let randomNumber = ['drama','fantasy','comedy'];
let randomIndex = Math.floor(Math.random() * 3);

  if (randomIndex === 0) {
    return randomNumber[0]
  } else if (randomIndex === 1) {
    return randomNumber[1]
  } else if (randomIndex === 2) {
    return randomNumber[2]
  }  
}
chooseRandomGenre();


/* 



2. `displayShow(show)`

This function accepts the name of a show (such as "The Witcher") and displays it on the page. It uses the _exact formatting_ of the strings in the arrays to find and display the correct show. Try running `displayShow("The Witcher")` and `displayShow("The Queen's Gambit")` in the console and check the page to see what happens.

## Step 2: Implementing `displayRandomShow(genre)`

This function does all the heavy lifting for the user experience. Remember, the user selects a genre from the dropdown and then this function runs.

So what do we need this function to do? Dr. Small likes to handle the special case first - that's when the genre parameter is "random" and we want to reassign `genre`. How can we determine that? We can check the genre parameter in a conditional statement (i.e. an if statement) and reassign it in the conditional code block using `chooseRandomGenre()`. We can use triple equal signs to check if the genre is "random". */

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  
  let shows = getRandomNumber(0,4);
  
  if (genre === "drama") {
    displayShow(dramaShows[shows])
  } else if (genre === "fantasy") {
    displayShow(fantasyShows[shows])
  } else if (genre === "comedy") {
    displayShow(comedyShows[shows])
  } 
}
    

