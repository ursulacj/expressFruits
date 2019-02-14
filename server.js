const express = require('express');
const app = express();



app.get('/', function(req,res){
    res.send(`Hey now! You're a rockstar`)
})







app.listen(3000, function(){
    console.log('Server is locked and loaded on port 3000');
})