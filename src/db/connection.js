const mongoose = require('mongoose');

const connect =async ()=>{ await mongoose.connect("mongodb://127.0.0.1:27017/MarketingEra")}
if(connect()){
    console.log("connected to database givewell");
   
}
else
{ 
    console.log("There was an error while connecting to the database.");
}
try
{
    connect();
}catch(err){
    console.log("error ocuured..!!");
}
