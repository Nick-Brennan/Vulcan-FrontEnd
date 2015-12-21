# Vulcan-FrontEnd Dota2 History Search

### Primary Technologies Used: 
- UnderscoreJS 
- jQuery 
- Bootstrap
- NodeJS 
- ExpressJS 

###To Get Started: 
1. Clone 
2. run `npm install`  and `bower install` to include the necessary dependencies 
3. Start the Node server (`node index.js` or `nodemon`)


#### About:
Simple search UI for the Dota2 Match History API. The API is not cross origin request friendly and doesn't seem to support JSONP. After looking into proxy strategies and libraries like Xdomain, I decided the simplest approach would be to make the API calls from a simple Express based back-end. The NPM middle-ware package "dota2-api" from booxood serves as a wrapper for the HTTP requests.

#### Still To-Do:
The datetime pickers still need to be wired up to the search.  Clicking on a match should display match details. Further styling, cleanup and refactoring. 