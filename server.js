/*
Node 101 - Lecture 2

Now we're going to spice things up by actually sending AND recieving data from server to browser (vice versa)

We're going to create two API endpoints.
The first one GET request and is going to be a generic HTML page with a static form
The second is going to be POST request that recieves the input from the HTML page

As always it's standard procedure to setup express in set ways.
We are however, going to introduce `body-parser to help interprete HTML forms`.
*/

//First we require the express module
var express = require("express");
//Then we initialize it as an app
var app = express();

//We need to initalize body-parser to parse HTML forms.
//First require the body-parser module
var bodyParser = require("body-parser");
//Then chain it to the express middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Now we send a HTML file (located in the root directory of this project) in a GET request
app.get("/", function(req,res) {
  res.sendFile(__dirname + "/page.html");
  /*
  There are a few things to note.
  The first thing is that we are sending a FILE instead of just plain text with `send`.
  This is why we're using the `sendFile()` function instead.

  Second, we need to ALWAYS make sure we prefix with `__dirname` when sending files.
  As that sends data from the relative path of the project.
  */
})

//Now we are going to recieve data with a POST request called `getMoney`

app.post("/getMoney", function(req,res) {
  //Note how if we want to access data sent from the form. We access the requests `body` object.
  var dollars = req.body.dollars;
  //Since we named the input field `dollars` we are going to access that WITHIN the body object.
  //Now we want to send this data to the browser
  res.send("You just sent me " + dollars + " dollars.");
})

//Standard procedure we listen on PORT 3000
app.listen(3000);
