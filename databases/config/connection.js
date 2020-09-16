const mongoose = require('mongoose');

const dbConnection =  mongoose.connect('mongodb://localhost/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected on databases");
})
.catch(()=>{
    console.error("Error to Connecting on databases");
});

module.exports = dbConnection;