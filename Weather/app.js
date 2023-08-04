const express = require("express");
const https = require('node:https');
const bodyParser = require("body-parser");

const app = express();

// Parse the text request
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    // Send the index connected with JS
    res.sendFile(__dirname + "/index.html");
    
    
});
app.post("/",function(req,res){
    const query = req.body.cityName;
    const apiKey = "98eb22d77e4cd3061827dda0d828dfa7";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+ unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].desciption;

        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+ icon+"@2x.png";
        res.write("<p>The weather is currently "+ weatherDescription+"</p>");
        res.write("<h1>The temperature in " + query +" is  "+ temp + " degrees Celcius.</h1>");
        res.write("<img src =" + imageURL + ">");
        res.send();
        });
    });
});



app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})