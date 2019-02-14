const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/fruits';

mongoose.connect(connectionString);

mongoose.on('connected', function(){
    console.log(`Mongoose is connected at ${connectionString}`);
})

mongoose.on('disconnected', function(){
    console.log(`Mongoose is disconnected`);
})

mongoose.on('error', function(error) {
    console.log('Server error');
});