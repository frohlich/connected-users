/**
 * 
 * TODO: 
 *  1- Install and configure MEAN.JS
 *  2- Use YOMEN to generete CRUDS:
 *  2a- User(id,name,macaddress,hostname,)
 *  2b- UserHistory(id, user_id, ip, loggedIn, loggedOut, longitude, latitude)
 *  3- DO:
 *  3a- connect: method used when the users connects into;
 *  3b- refresh: method called automatic, it check into network if connected users are online.
 *  3c- apply: method set update and download into transmission
 *  4- Parameters:
 *  4a- Networks stuffs: IP, Mask, 
 *  4b- Transmissioon: IP, port, login, password.
 *  4c- Others.
 * 
 */

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});