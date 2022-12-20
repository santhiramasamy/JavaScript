//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    //console.log(data); // all related data will be printed along with a random joke
    console.log(data.value); //this will print only the random joke
}

getJoke();