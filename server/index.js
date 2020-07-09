const mongoose = require('mongoose');
require('dotenv/config');


mongoose.connect("mongodb://127.0.0.1:27017/blogpost",
{useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
    console.log('yes we are connected now');
});


module.exports = mongoose;