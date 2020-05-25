const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// urlencoded to parse data from html form
app.use(bodyParser.urlencoded({extended: true}));


// what should happen when browser gets in touch with our server and 
// makes a get request. parameter 1: location of request 
// parameter 2: callback function what to do when request happens

//when you go to browser and type localhost:3000, you are specifying
// location of server. browser goes to that location and makes request
// callback triggered, send browser response, ie html
app.get("/", function(request, response){
    // filepath of current file, regardless of where it's hosted
    response.sendFile(__dirname + "/index.html");
});

app.get("/about", function(request, response){
    response.send("I am a sophomore in university studying computer science. Outside of the classroom, I am mainly involved in Manna Christian Fellowship.");
});

// handle post requests
app.post("/", function(request, response){
    // what user entered
    // console.log(request.body);
    var n1 = Number(request.body.num1);
    var n2 = Number(request.body.num2);

    response.send("Result: " + (n1+n2));
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
    console.log("Server started successfully");
});
