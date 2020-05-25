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


app.listen(3000, function(){
    console.log("server started on port 3000");
    sgMail.send(msg, function(err){
        if (err)
            console.log(err);
        else{
            console.log("sent");
        }
    });
    
});